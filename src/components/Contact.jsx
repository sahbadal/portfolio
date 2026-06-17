import { Mail, Phone, Github, Linkedin, CheckCircle } from "lucide-react";
import { useState } from "react";
import { sendEmail } from "../api/email.js";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [submittedName, setSubmittedName] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);
        setSuccess(null);

        try {
            await sendEmail(formData);

            setSubmittedName(formData.name);
            setSuccess(true);
            setFormData({ name: "", email: "", message: "" });
        } catch (err) {
            console.error(err);
            setSuccess(false);
        } finally {
            setIsSending(false);
        }
    };

    const handleSendAnother = () => {
        setSuccess(null);
        setSubmittedName("");
    };

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-lg text-gray-600">
                        Let's work together on your next project
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="space-y-6">
                        <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                            <Mail className="text-blue-600 mr-4" size={24} />
                            <div>
                                <h3 className="font-semibold text-gray-900">Email</h3>
                                <a
                                    href="mailto:badalsah8541@gmail.com"
                                    className="text-blue-600 hover:underline"
                                >
                                    badalsah8541@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                            <Phone className="text-blue-600 mr-4" size={24} />
                            <div>
                                <h3 className="font-semibold text-gray-900">Phone</h3>
                                <a
                                    href="tel:+918541928870"
                                    className="text-blue-600 hover:underline"
                                >
                                    +91-8541928870
                                </a>
                            </div>
                        </div>

                        <div className="flex space-x-4 pt-4">
                            <a
                                href="https://github.com/sahbadal"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                            >
                                <Github size={24} />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/badal-sah"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </div>

                    {success === true ? (
                        <div className="bg-white border border-green-200 rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center text-center">
                            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
                                <CheckCircle className="text-green-600" size={36} />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                Thank you, {submittedName}!
                            </h3>

                            <p className="text-gray-600 mb-6">
                                Your message has been sent successfully. I’ll get back to you as soon as possible.
                            </p>

                            <button
                                type="button"
                                onClick={handleSendAnother}
                                className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    autoComplete="off"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 outline-0 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    autoComplete="off"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 outline-0 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    autoComplete="off"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 border outline-0 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                    placeholder="Your message..."
                                />
                            </div>

                            {success === false && (
                                <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm">
                                    Something went wrong. Please try again.
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSending}
                                className="w-full flex justify-center items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors cursor-pointer bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-70"
                            >
                                {isSending && (
                                    <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                )}

                                {isSending ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;