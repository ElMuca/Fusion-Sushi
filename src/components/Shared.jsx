import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { whatsappUrl } from '../data/site';
export function Logo(){return <a href="#inicio" className="logo" aria-label="Fusión Sushi Calama, ir al inicio"><span className="logo-mark">融</span><span className="logo-copy"><strong>FUSIÓN<span>SUSHI</span></strong><small>CALAMA · CHILE</small></span></a>}
export function WhatsAppButton({children='Pedir por WhatsApp',message, className=''}){return <a href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer" className={`btn btn-red ${className}`}><MessageCircle size={19}/>{children}<ArrowUpRight size={17}/></a>}
export function SectionHeading({eyebrow,title,description,center=false}){return <div className={`section-heading ${center?'center':''}`}><span className="eyebrow"><span className="eyebrow-line"/>{eyebrow}</span><h2>{title}</h2>{description&&<p>{description}</p>}</div>}
export function Reveal({children,className='',delay=0}){const reduce=useReducedMotion();return <motion.div className={className} initial={reduce?false:{opacity:0,y:28}} whileInView={reduce?{}:{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{duration:.65,delay,ease:[.2,.8,.2,1]}}>{children}</motion.div>}
