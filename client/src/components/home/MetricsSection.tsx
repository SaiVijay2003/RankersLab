import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function MetricsSection() {
  const metrics = [
    { value: 322433, label: "Video Hours" },
    { value: 2000, label: "Daily Live Classes" },
    { value: 40000, label: "Active Students" },
    { value: 10000, label: "Elite Tutors" }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  return (
    <section id="metrics" className="py-16 bg-primary text-white" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-bold text-3xl mb-4">Our Impact in Numbers</h2>
          <p className="max-w-2xl mx-auto text-primary-100 opacity-90">
            See how Rankerslab is transforming education globally.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <Counter value={metric.value} isInView={isInView} />+
              </div>
              <p className="text-lg text-primary-100 font-medium opacity-90">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ value, isInView }: { value: number, isInView: boolean }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = value / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [value, isInView]);
  
  return <>{count.toLocaleString()}</>;
}
