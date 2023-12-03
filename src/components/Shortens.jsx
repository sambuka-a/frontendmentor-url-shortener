import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Button from './Button';

const Shortens = ({ link }) => {
  const [copiedLink, setCopiedLink] = useState(null);

  const copyToClipboard = (url) => {
    navigator.clipboard.writeText(url).then(() => {
      setCopiedLink(url);
    });
  };

  if (!link?.length) return null;

  return (
    <section className="shortens-container">
      <div className="shortens-card">
        {link.map((item) => (
          <AnimatePresence key={item}>
            <motion.div
              className="shortens-item"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}>
              <span>{item}</span>

              <Button onClick={() => copyToClipboard(item)}>
                {copiedLink === item ? 'Copied!' : 'Copy'}
              </Button>
            </motion.div>
          </AnimatePresence>
        ))}
      </div>
    </section>
  );
};

export default Shortens;
