import { useState } from 'react';
import './landing.css';

const services = [
  ['Control de accesos', 'Tecnología y operación coordinadas para entradas y salidas más ágiles.'],
  ['Diseño y equipamiento', 'Proyectamos obra civil, instalaciones y equipos según las necesidades del sitio.'],
  ['Operación y mantenimiento', 'Procesos claros y cuidado continuo para una operación confiable.'],
  ['Servicios complementarios', 'Valet parking, limpieza, vigilancia, apoyo vial y atención al visitante.'],
];

export default function Landing() {
  const [open, setOpen] = useState(false);
  return <div className="shell">
    <header><a className="brand" href="#inicio" aria-label="AccessOne Parking Guatemala, inicio"><img src="/guatemala@4x-100.jpg" alt="AccessOne Parking Guatemala" /></a><button className="menu" onClick={() => setOpen(!open)} aria-expanded={open}>{open ? 'Cerrar' : 'Menú'}</button><nav className={open ? 'open' : ''}><a href="#soluciones">Soluciones</a><a href="#proceso">Proceso</a><a href="#contacto">Contacto</a></nav><a className="top-cta" href="#contacto">Solicitar diagnóstico <b>↗</b></a></header>
    <main>
      <section className="hero" id="inicio"><div className="grid-bg"></div><div className="hero-copy"><p className="tag"><span></span> Infraestructura para una ciudad en movimiento</p><h1>Accesos que<br/>piensan <em>un paso<br/>adelante.</em></h1><p>Diseñamos, equipamos y operamos estacionamientos con una visión clara: convertir cada acceso en una experiencia eficiente.</p><div className="actions"><a href="#contacto">Transformar mi operación <b>→</b></a><a href="#soluciones">Conocer soluciones</a></div></div><div className="dashboard" aria-label="Visualización conceptual de una operación de estacionamiento"><div className="dash-head"><span>OPERACIÓN EN MOVIMIENTO</span><i>● EN LÍNEA</i></div><div className="map"><span className="lane l1"></span><span className="lane l2"></span><span className="lane l3"></span><b className="node n1">01</b><b className="node n2">02</b><b className="node n3">03</b><div className="pulse"></div></div><div className="dash-foot"><span><small>FLUJO</small>Coordinado</span><span><small>ACCESOS</small>Conectados</span><span><small>ESTADO</small>Operativo</span></div></div></section>
      <section className="intro"><p className="tag">Una mejor primera impresión</p><h2>El estacionamiento no es el final del trayecto.<br/><em>Es el inicio de la experiencia.</em></h2><p>Integramos estrategia, infraestructura y atención para que cada espacio funcione con orden y proyecte confianza.</p></section>
      <section className="solutions" id="soluciones"><div className="section-title"><p className="tag"><span></span> Soluciones integrales</p><h2>Una operación.<br/><em>Todos los frentes.</em></h2></div><div className="cards">{services.map(([title,text],i) => <article key={title}><span>0{i+1}</span><div className="icon">{['↔','◇','◌','+'][i]}</div><h3>{title}</h3><p>{text}</p><b>Explorar <i>↗</i></b></article>)}</div></section>
      <section className="process" id="proceso"><div className="process-art"><div className="rings"><span></span><span></span><span></span><b>A1</b></div><p>SISTEMA ACCESSONE<br/>SOLUCIÓN A LA MEDIDA</p></div><div className="process-copy"><p className="tag">Del plano a la operación</p><h2>Una metodología<br/><em>conectada.</em></h2><ol>{[['Analizamos','Flujos, necesidades y oportunidades del espacio.'],['Diseñamos','La solución operativa, técnica y arquitectónica.'],['Implementamos','Equipos, imagen, procesos y puesta en marcha.'],['Optimizamos','Seguimiento y mejora continua de la experiencia.']].map(([title,text],i)=><li key={title}><span>0{i+1}</span><div><b>{title}</b><p>{text}</p></div></li>)}</ol></div></section>
      <section className="contact" id="contacto"><p className="tag">Conectemos</p><h2>Tu siguiente acceso<br/>empieza <em>aquí.</em></h2><p>Cuéntanos sobre tu proyecto en Guatemala. Incorporaremos los datos de contacto oficiales antes del lanzamiento.</p><a href="mailto:contacto@example.com">Solicitar diagnóstico <b>↗</b></a></section>
    </main>
    <footer><a className="brand" href="#inicio"><img src="/guatemala@4x-100.jpg" alt="AccessOne Parking Guatemala" /></a><p>Propuesta de landing · Datos de contacto provisionales</p><span>© {new Date().getFullYear()}</span></footer>
  </div>;
}
