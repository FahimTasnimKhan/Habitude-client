// BackToHomeButton.jsx
import { useNavigate } from 'react-router';
import { Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const BackToHomeButton = ({ text = 'Back to Home' }) => {
  const navigate = useNavigate();

  return (
    <motion.button
      onClick={() => navigate('/')}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-3 px-6 py-3 rounded-2xl shadow-lg 
                 bg-white/20 backdrop-blur-md border border-white/30 
                 text-white font-semibold transition-all duration-300 hover:bg-white/30"
    >
      <Activity className="w-6 h-6" />
      <span className="text-lg">{text}</span>
    </motion.button>
  );
};

export default BackToHomeButton;
