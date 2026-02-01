import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const whatsappMessage = `*New Message from Portfolio Contact Form*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A%0A*Message:*%0A${formData.message}%0A%0A_Sent via portfolio website_`;
    
    // WhatsApp URL with phone number (Nigeria format: 234...)
    const phoneNumber = "2347017179260"; // Replace with 2347017179260 for Nigeria
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      name: "WhatsApp",
      url: "https://wa.me/2347017179260",
      icon: "/whatsapp.png",
      username: "+234 701 717 9260",
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      name: "GitHub",
      url: "https://github.com/olalekan202-4",
      icon: "/github.png",
      username: "@olalekan202-4",
      color: "text-gray-800 dark:text-gray-300",
      bgColor: "bg-gray-50 dark:bg-gray-900/20",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/olalekan-adejumo2",
      icon: "/linkedin.png",
      username: "olalekan-adejumo2",
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      name: "Email",
      url: "mailto:adejumoolalekan16@yahoo.com",
      icon: "/gmail.png",
      username: "adejumoolalekan16@yahoo.com",
      color: "text-red-600",
      bgColor: "bg-red-50 dark:bg-red-900/20",
    },
  ];

  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-10 fade-in-up"
    >
      <h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
        Get in Touch
      </h3>

      <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-xl">
        I'm currently open to frontend internship and junior opportunities. 
        If you'd like to collaborate, discuss a project, or learn more about my work, 
        feel free to reach out via WhatsApp.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* WhatsApp Contact Form */}
        <div>
          <h4 className="text-xl font-semibold mb-6">Send a Message via WhatsApp</h4>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg 
                bg-white dark:bg-gray-800 transition-all focus:ring-2 focus:ring-green-500 
                focus:border-transparent outline-none text-gray-900 dark:text-gray-100"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg 
                bg-white dark:bg-gray-800 transition-all focus:ring-2 focus:ring-green-500 
                focus:border-transparent outline-none text-gray-900 dark:text-gray-100"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg 
                bg-white dark:bg-gray-800 transition-all focus:ring-2 focus:ring-green-500 
                focus:border-transparent outline-none text-gray-900 dark:text-gray-100 resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-green-600 text-white font-medium rounded-lg 
              hover:bg-green-700 transition-all duration-300 hover:scale-[1.02] 
              flex items-center justify-center gap-2"
            >
              <span>📱</span>
              Open WhatsApp & Send
            </button>
            
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              This will open WhatsApp with your pre-filled message
            </p>
          </form>
        </div>

        {/* Social Links & Info */}
        <div>
          <h4 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
            Connect With Me
          </h4>
          
          <div className="space-y-4 mb-10">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 border border-gray-200 dark:border-gray-800 
                rounded-xl hover:scale-[1.02] transition-all duration-300 group ${link.bgColor}`}
              >
                <div className="w-6"><img src={link.icon} alt={link.name}/>
</div>
                <div className="flex-1">
                  <h5 className={`font-medium ${link.color}`}>
                    {link.name}
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {link.username}
                  </p>
                </div>
                <span className="text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400">
                  →
                </span>
              </a>
            ))}
          </div>

          <div className="p-6 bg-linear-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
            <h5 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">📍 Location & Availability</h5>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              <span className="font-medium">🌍 Remote:</span> Available for remote opportunities worldwide
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              <span className="font-medium">Relocation:</span> Open to relocation for the right opportunity
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              <span className="font-medium">Response Time:</span> Typically respond within 24 hours
            </p>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;