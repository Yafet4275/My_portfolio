import React, { useEffect, useState } from "react";

function Birthday() {
  const [birthdays, setBirthdays] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 🔹 Change this URL depending on your setup:
    // Option 1: If serving a static JSON file
    // const url = "/birthday_output.json";
    // Option 2: If using n8n HTTP Response node (webhook)
    const url_n8n = "http://localhost:5678/webhook/birthday"; 
    const url = "http://localhost:8500/birthdays";
    const VPS_url = "http://lopeztel.com/api/birthdays";

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setBirthdays(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching birthdays:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center mt-20 text-gray-500">Loading...</div>;

  const isArray = Array.isArray(birthdays);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-purple-600 mb-6">🎂 Birthday Reminder</h1>

        {isArray && birthdays.length > 0 ? (
          birthdays.map((b, i) => (
            <div key={i} className="border p-4 mb-4 rounded-lg bg-purple-50">
              <p className="text-lg font-semibold text-gray-800">
                {b.name} {b.last_name}
              </p>
              <p className="text-gray-500">{b.position}</p>
              <p className="text-gray-400 text-sm">{b.birthday}</p>
              <p className="text-green-600 font-medium mt-2">{b.message}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">{birthdays?.message || "There is no birthday today."}</p>
        )}
      </div>
    </div>
  );
}

export default Birthday;
