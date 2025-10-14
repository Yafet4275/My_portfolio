import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const recaptchaSiteKey = "6LcyC-orAAAAAJwRQaq74ebp5XO75d4lDRheVabT"; // Replace with your actual site key
  

  // ✅ Load Google reCAPTCHA script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

   // ✅ reCAPTCHA callback
  const onCaptchaSuccess = (token) => {
    setCaptchaToken(token);
  };
  
  // ✅ Send email handler
  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    const recaptchaValue = document.querySelector(".g-recaptcha-response").value;
    if (!recaptchaValue) {
      toast({
        title: "reCAPTCHA Required",
        description: "Please verify that you are not a robot.",
        variant: "destructive",
      });
      return;
    }

    setSending(true);

    const templateParams = {
      name,
      email,
      message,
    };

    emailjs
      .send("service_ae85uad", "template_c7zyach", templateParams, "LucRYRVJY9RNO9T5g")
      .then(() => {
        toast({
          title: "Message Sent! 🎉",
          description: "Thanks for reaching out! I'll get back to you soon.",
        });
        setName("");
        setEmail("");
        setMessage("");
        setSending(false);
        window.grecaptcha.reset();
      })
      .catch((err) => {
        console.error("FAILED...", err);
        toast({
          title: "Error Sending Message",
          description: "Something went wrong. Please try again later.",
          variant: "destructive",
        });
        setSending(false);
      });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "yafetlopez4275@gmail.com" },
    { icon: MapPin, label: "Location", value: "Sarcoxie MO, USA" },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Have a project in mind? Let's work together!
          </p>
        </motion.div>

         <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <info.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{info.label}</p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <h4 className="font-bold mb-3">Why Work With Me?</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>✓ 5+ years of professional experience</li>
                <li>✓ Proven track record of successful projects</li>
                <li>✓ Strong collaboration and problem-solving skills</li>
                <li>✓ Commitment to clean, maintainable code</li>
              </ul>
            </div>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             <form onSubmit={sendEmail} className="glass-effect rounded-2xl p-8 space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="bg-black/20 border-gray-700"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="bg-black/20 border-gray-700"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-black/20 border-gray-700 resize-none"
                />
              </div>
              {/* reCAPTCHA widget */}
              <div className="g-recaptcha" data-sitekey={recaptchaSiteKey} data-callback="onCaptchaSuccess"></div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                size="lg"
              >
                <Send className="w-4 h-4 mr-2" />
                {sending ? "Sending..." : "Send Message"}
              </Button>
              {/* {success && <p className="text-green-400 text-center">Message sent successfully!</p>}
              {error && <p className="text-red-400 text-center">Error sending message.</p>} */}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;