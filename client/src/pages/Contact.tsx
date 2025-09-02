import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-white mb-16 text-center">Contact</h1>
          
          {/* Contact Us Section moved to bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6 bg-gray-900/50 backdrop-blur-lg border-gray-800">
                <h2 className="text-2xl font-semibold text-white mb-6">Contact Us</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Phone className="h-5 w-5" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Mail className="h-5 w-5" />
                    <span>contact@m4development.com</span>
                  </div>
                </div>
                <Button className="mt-6 bg-yellow-600 text-black hover:bg-yellow-500 font-semibold" size="lg">
                  Schedule a Consultation
                </Button>
              </Card>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
