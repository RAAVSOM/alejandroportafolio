import DotGrid from './blocks/Backgrounds/DotGrid/DotGrid';
import MetaBalls from './blocks/Animations/MetaBalls/MetaBalls';

import GlassSurface from './blocks/Components/GlassSurface/GlassSurface';
import GradualBlur from './blocks/Animations/GradualBlur/GradualBlur';

import perfil from './assets/perfil.jpg'
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { SiSpringboot } from 'react-icons/si';
import { SiAngular } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiBootstrap } from 'react-icons/si';
import { TbWorld } from 'react-icons/tb';
import { FaGithub } from 'react-icons/fa';

import { MdNavigateBefore } from 'react-icons/md';
import { MdNavigateNext } from 'react-icons/md';

import './App.css'

const proyectosData = [
    { id: 1, nombre: "InBest", imagen: "/pagina1.jpg", tecnologias: ["Angular", "SpringBoot"], link: ["#", "https://github.com/RAAVSOM/front-app-inbest"] },
    { id: 2, nombre: "GreenLink", imagen: "/pagina2.png", tecnologias: ["Angular", "SpringBoot"], link: ["#", "https://github.com/RAAVSOM/green-link-frontend"] },
    { id: 3, nombre: "Cuerpo de Bomberos", imagen: "/pagina4.png", tecnologias: ["Angular", "Bootstrap"], link: ["#", "https://github.com/RAAVSOM/CuerpoDeBomberos"] },
    { id: 4, nombre: "Alejandro Portafolio", imagen: "/pagina3.png", tecnologias: ["React", "Tailwind"], link: ["#", "#"] },
];

function TechIcon({ tech, size = 24 }) {
    const icons = {
        React: <SiReact size={size} />,
        SpringBoot: <SiSpringboot size={size} />,
        Angular: <SiAngular size={size} />,
        Firebase: <SiFirebase size={size} />,
        Tailwind: <SiTailwindcss size={size} />,
        Bootstrap: <SiBootstrap size={size} />,
        Github: <FaGithub size={size} />,
        Page: <TbWorld size={size} />
    };
    return icons[tech] || null;
}
const buttons = ["React", "Bootstrap", "Angular", "SpringBoot", "Firebase", "Tailwind",
    "React", "Bootstrap", "Angular", "SpringBoot", "Firebase", "Tailwind",
    "React", "Bootstrap", "Angular", "SpringBoot", "Firebase", "Tailwind"];

function App() {
    const controls = useAnimation();
    useEffect(() => {
        startRotation(); // arranca al cargar
    }, []);

    const sobreMi = useRef(null);
    const proyecto = useRef(null);
    const perfilP = useRef(null);
    const contacto = useRef(null);
    const inicio = useRef(null);

    const [filtroAnterior, setFiltroAnterior] = useState("Todos");
    const [filtro, setFiltro] = useState("Todos");
    const [proyectos, setProyectos] = useState(proyectosData);

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const text = isDarkMode ? "#ffffffff" : "#40402D";
    const textDark = isDarkMode ? "#40402D" : "#ffffff";
    const bg = isDarkMode ? "#000000" : "#ffffff";
    const dots = isDarkMode ? "#0c0c0c" : "#f3f3f3";
    const selectedDot = isDarkMode ? "#4b4b1c" : "#b6b639";

    const zoomIn = {
        hidden: { scale: 0.3 },
        visible: { scale: 1 },
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

    const fade = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const scrollToSobreMi = () => {
        sobreMi.current.scrollIntoView({ behavior: 'smooth' });
    }

    const scrollToProyecto = () => {
        proyecto.current.scrollIntoView({ behavior: 'smooth' });
    }

    const scrollToPerfil = () => {
        perfilP.current.scrollIntoView({ behavior: 'smooth' });
    }

    const scrollToContacto = () => {
        contacto.current.scrollIntoView({ behavior: 'smooth' });
    }

    const scrollToInicio = () => {
        inicio.current.scrollIntoView({ behavior: 'smooth' });
    }

    const scrollRef = useRef(null);

    const handleNext = () => {
        const el = scrollRef.current;
        if (!el) return;

        if (el.scrollLeft + el.clientWidth >= el.scrollWidth) {
            // Volver al inicio
            el.scrollTo({ left: 0, behavior: "smooth" });
        } else {
            el.scrollBy({ left: 300, behavior: "smooth" }); // mueve 1 "paso"
        }
    };

    const handlePrev = () => {
        const el = scrollRef.current;
        if (!el) return;

        if (el.scrollLeft === 0) {
            // Ir al final
            el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
        } else {
            el.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const ChangeToMode = () => {
        setIsDarkMode(!isDarkMode);
    }

    const filtrar = (tec) => {
        setFiltro(tec);
        if (tec === filtroAnterior || tec === "Todos") {
            setProyectos(proyectosData);
        } else {
            const filtrados = proyectosData.filter((p) =>
                p.tecnologias.includes(tec)
            );
            setProyectos(filtrados);
            setFiltroAnterior(tec)
        }
    };

    const stringHaveGithub = (link) => {
        if (link.includes("github")) {
            return "Github";
        } else if (link.includes("https")) {
            return "Page";
        }
    };

    const boolHaveGithub = (link) => {
        if (link.includes("github")) {
            return "block";
        } else if (link.includes("https")) {
            return "block";
        } else {
            return "hidden";
        }
    };

    const startRotation = () => {
        controls.start({
            rotate: 720,
            transition: { repeat: Infinity, duration: 40, ease: "linear" },
        });
    };

    const stopRotation = () => {
        controls.stop();
    };

    return (
        <>
            <main className='h-screen w-full overflow-y-scroll! text-[var(--textLight)] bg-[var(--bg)]'
                style={{ "--textLight": text, "--textDark": textDark, "--bg": bg }}>
                <div className='absolute z-10 w-full h-screen overflow-hidden! pointer-events-none'>
                    <DotGrid dotSize={8}
                        gap={15}
                        baseColor={dots}
                        activeColor={selectedDot}
                        proximity={120}
                        shockRadius={250}
                        shockStrength={5}
                        resistance={750}
                        returnDuration={1.5}
                        className='w-full h-full'
                    />
                </div>

                <div className='absolute z-20 w-full h-screen overflow-hidden! pointer-events-none'>
                    <MetaBalls
                        color={selectedDot}
                        cursorBallColor={selectedDot}
                        cursorBallSize={2}
                        ballCount={25}
                        animationSize={27}
                        enableMouseInteraction={false}
                        enableTransparency={true}
                        hoverSmoothness={0.05}
                        clumpFactor={1.5}
                        speed={0.3}
                    />
                </div>

                <div className='relative z-30 inset-0 w-full h-screen transition duration-300 ease-in-out'>
                    <div className='w-full h-full' ref={inicio}>
                        <div className='w-full h-full inset-0 flex flex-col justify-center w-full'>
                            <div className='h-1/10 mx-10 lg:mx-80'>
                                <GlassSurface
                                    className='w-full! h-full! rounded-t-none!'
                                    displace={2}
                                    borderRadius={60}
                                    distortionScale={-150}
                                    redOffset={5}
                                    greenOffset={15}
                                    blueOffset={25}
                                    brightness={60}
                                    opacity={0.8}
                                    mixBlendMode="screen"
                                >
                                    <div className='flex justify-center gap-5 w-full mt-5'>
                                        <button className='cursor-pointer p-4 w-1/20 rounded-full text-[var(--text)] transition duration-300 ease-in-out'
                                            onClick={ChangeToMode}
                                        >
                                            {isDarkMode ? <i class="fa-solid fa-sun fa-2xl"></i> : <i class="fa-regular fa-moon fa-2xl"></i>}
                                        </button>

                                        {/*<button className='cursor-pointer p-4 w-1/20 rounded-full text-[var(--text)] transition duration-300 ease-in-out'
                                            onClick={ChangeToMode}
                                        >
                                            <i class="fa-solid fa-language fa-xl"></i>
                                        </button>*/}
                                    </div>
                                </GlassSurface>
                            </div>

                            <div className='h-8/10 flex flex-col justify-center'>
                                <div className='flex flex-col justify-center h-5/11'>
                                    <div className="text-center relative z-10">
                                        <motion.div
                                            className="text-5xl font-black"
                                            variants={fadeUp}
                                            initial="hidden"
                                            animate="visible"
                                            transition={{ duration: 1 }}
                                        >
                                            <div className='z-40'>ALEJANDRO SOCARRAS OLASCUAGA</div>
                                        </motion.div>
                                    </div>
                                    <div className="text-center relative z-10">
                                        <motion.div
                                            className="text-2xl"
                                            variants={fadeUp}
                                            initial="hidden"
                                            animate="visible"
                                            transition={{ duration: 1 }}
                                        >
                                            <div>TECNÓLOGO EN DESARROLLO DE SOFTWARE</div>
                                        </motion.div>
                                    </div>

                                    <header className='h-1/10 lg:h-1/10 w-full mt-10'>
                                        <ul className='flex justify-center h-full items-center gap-2 lg:gap-20'>
                                            <motion.li className='font-normal text-sm lg:text-xl h-full content-center'
                                                onClick={scrollToSobreMi}
                                                variants={fade}
                                                initial="hidden"
                                                animate="visible"
                                                transition={{ duration: 1, delay: 0.5 }}
                                            >
                                                <div className='flex items-center justify-center h-full px-1 py-1 lg:px-8 lg:py-6 relative z-10 border-[var(--textLight)] border-5 text-[var(--textDark)] rounded-full bg-[var(--textLight)]'>
                                                    <a href="#">Sobre Mí</a>
                                                </div>
                                            </motion.li>
                                            <motion.li className='font-normal text-sm lg:text-xl h-full content-center'
                                                onClick={scrollToProyecto}
                                                variants={fade}
                                                initial="hidden"
                                                animate="visible"
                                                transition={{ duration: 1, delay: 1 }}
                                            >
                                                <GlassSurface
                                                    className='px-2 py-4 lg:px-8 lg:py-7 w-full! h-full!'
                                                    displace={0}
                                                    borderRadius={90}
                                                    distortionScale={-150}
                                                    redOffset={5}
                                                    greenOffset={15}
                                                    blueOffset={25}
                                                    brightness={60}
                                                    opacity={0.8}
                                                    mixBlendMode="screen">
                                                    <a href="#">Proyectos</a>
                                                </GlassSurface>
                                            </motion.li>
                                            <motion.li className='font-normal text-sm lg:text-xl h-full content-center'
                                                onClick={scrollToPerfil}
                                                variants={fade}
                                                initial="hidden"
                                                animate="visible"
                                                transition={{ duration: 1, delay: 1.5 }}
                                            >
                                                <GlassSurface
                                                    className='px-2 py-1 lg:px-8 lg:py-7 w-full! h-full!'
                                                    displace={0}
                                                    borderRadius={90}
                                                    distortionScale={-150}
                                                    redOffset={5}
                                                    greenOffset={15}
                                                    blueOffset={25}
                                                    brightness={60}
                                                    opacity={0.8}
                                                    mixBlendMode="screen">
                                                    <a href="#">Perfil Profesional</a>
                                                </GlassSurface>

                                            </motion.li>
                                            <motion.li className='font-normal text-sm lg:text-xl h-full content-center'
                                                onClick={scrollToContacto}
                                                variants={fade}
                                                initial="hidden"
                                                animate="visible"
                                                transition={{ duration: 1, delay: 2 }}
                                            >

                                                <div className='flex items-center justify-center h-full px-1 py-1 lg:px-5 lg:py-6 relative z-10 border-[var(--textLight)] border-5 text-[var(--textDark)] rounded-full bg-[var(--textLight)]'>
                                                    <a href="#">Contacto</a>
                                                </div>
                                            </motion.li>
                                        </ul>
                                    </header>
                                </div>
                            </div>

                            <div className='h-1/10 mx-10 lg:mx-80'>
                                <GlassSurface
                                    className='w-full! h-full! pt-40 pb-20'
                                    borderRadius={60}
                                    displace={2}
                                    distortionScale={-150}
                                    redOffset={5}
                                    greenOffset={15}
                                    blueOffset={25}
                                    brightness={60}
                                    opacity={0.8}
                                    mixBlendMode="screen"
                                >
                                    <div className='font-black text-5xl lg:text-7xl!'>
                                        SOBRE MÍ
                                    </div>
                                </GlassSurface>
                            </div>
                        </div>
                    </div>

                    <div className='h-screen'>
                        <div className='relative flex flex-col justify-start pt-35 h-full w-full z-30' ref={sobreMi}>
                            <div className='relative inset-0 w-full pb-38 h-full'>
                                <div className="flex flex-col text-start h-full lg:h-5/6 mx-1 mt-6 lg:mx-80 mt-1 lg:mt-20 justify-center">
                                    <div className='flex flex-col px-2 lg:flex-row gap-1 lg:gap-10 w-full h-8/9 justify-center items-center'>
                                        <section className='py-1 lg:py-8 content-center justify-items-center h-[200px] lg:h-4/5'>
                                            <motion.img src={perfil} alt="perfil" className='h-full w-full rounded-full size-100 p-5 mx-auto outline-5 bg-[var(--textLight)]/10 backdrop-blur-[4px] outline-[var(--bg)]'
                                                variants={zoomIn}
                                                initial="hidden"
                                                animate="visible"
                                                transition={{ duration: 1 }}
                                            />
                                        </section>
                                        <section className='content-center w-full lg:w-2/4 h-full lg:h-4/5'>
                                            <div className='bg-[var(--textLight)]/10 backdrop-blur-[4px] rounded-4xl px-5 py-5 lg:px-10 border-3 border-[var(--bg)] h-3/4 lg:h-full content-center'>
                                                <p className="text-sm lg:text-lg text-justify font-medium">
                                                    Egresado del programa de becas Boomerang.
                                                    Cuento con un amplio conocimiento en proyectos reales tanto en entornos académicos como institucionales.
                                                </p>
                                                <p className="text-sm lg:text-lg text-justify font-bold">
                                                    Enfocado en el desarrollo de soluciones web utilizando lenguajes de programación como Angular, SpringBoot y .NET.
                                                </p>
                                                <p className="text-sm lg:text-lg text-justify font-medium">
                                                    Hábil en el diseño de interfaces, consumo de APIs REST y metodologías ágiles.
                                                    Proactivo, autodidacta y con fuertes habilidades para resolver problemas técnicos y trabajar en equipo.
                                                </p>
                                            </div>
                                        </section>
                                    </div>

                                    <section className='text-center'>
                                        <button
                                            onClick={() => window.open('/Alejandro_Socarras_HV_2025.pdf', '_blank')}
                                            className="cursor-pointer mt-0 lg:mt-5 text-md lg:text-xl text-[var(--textDark)] bg-[var(--textLight)] py-2 px-4 lg:py-5 lg:px-12 hover:bg-neutral-800 hover:text-[var(--textLight)] transition duration-300 ease-in-out rounded-full"
                                        >
                                            Descargar Hoja de Vida
                                        </button>
                                    </section>

                                </div>
                                <GradualBlur
                                    target="parent"
                                    position="bottom"
                                    height="2rem"
                                    strength={2}
                                    divCount={5}
                                    curve="bezier"
                                    exponential={true}
                                    opacity={1}
                                    zIndex={30}
                                />
                            </div>
                        </div>

                        <div className='relative flex flex-col justify-start h-full w-full z-10 overflow-hidden' ref={proyecto}>
                            <div className='relative inset-0 w-full h-full'>
                                <div className="flex flex-col text-start h-full mx-1 lg:mx-80 justify-between">
                                    <section className='relative content-center w-full h-1/15'>
                                        <motion.div
                                            className="absolute bottom-55 w-full h-full flex items-center justify-center"
                                            animate={controls}
                                            initial={{ rotate: 360 }}
                                        >
                                            {buttons.map((btn, i) => {
                                                const angle = (i / buttons.length) * 360; // posición en círculo

                                                return (
                                                    <div
                                                        key={i}
                                                        className="absolute"
                                                        style={{
                                                            transform: `rotate(${angle}deg) translate(400px) rotate(-90deg)`, // solo posición en círculo
                                                        }}
                                                    >
                                                        {/* Botón estático */}
                                                        <button
                                                            className="cursor-pointer group bg-[var(--textDark)] p-1 text-[var(--textLight)] hover:bg-[var(--textLight)] hover:text-[var(--textDark)] rounded-full transition duration-300 ease-in-out"
                                                            onMouseEnter={() => {
                                                                setIsPaused(true);
                                                                stopRotation();
                                                            }}
                                                            onMouseLeave={() => {
                                                                setIsPaused(false);
                                                                startRotation();
                                                            }}
                                                            onClick={() => {
                                                                filtrar(btn)
                                                            }}
                                                        >
                                                            <div className="p-1 lg:p-4 rounded-lg flex flex-col items-center gap-5">
                                                                <div>
                                                                    <TechIcon tech={btn} size={70} />
                                                                </div>
                                                                <div className='hidden group-hover:block'>
                                                                    <label>{btn}</label>
                                                                </div>
                                                            </div>
                                                        </button>
                                                    </div>
                                                );
                                            })}
                                        </motion.div>
                                    </section>

                                    <section className='absolute content-center top-15 inset-0 w-full h-1/12 text-[var(--textLight)] flex flex-col justify-center pointer-event-none'>
                                        <h2 className='text-center text-4xl lg:text-6xl font-bold'>Proyectos</h2>
                                    </section>


                                    <section className='relative content-center w-full h-4/7 mb-27 overflow-visible'>
                                        <div className='relative overflow-x-hidden no-scrollbar w-full h-full mask-x-from-95% mask-x-to-100%'
                                            ref={scrollRef}>
                                            <div className="flex gap-4 min-w-full max-w-fit h-full px-5 py-10 overflow-x-visible no-scrollbar scroll-smooth"
                                            >
                                                {proyectos.map((p) => (
                                                    <div
                                                        key={p.id}
                                                        className="group relative min-w-1/2 max-w-1/2 min-h-4/5 max-h-4/5 lg:min-w-2/7 lg:min-h-7/8 lg:max-w-2/7 lg:max-h-7/8 flex flex-col justify-center bg-[var(--textLight)]/10 self-end backdrop-blur-3xl rounded-4xl border-3 border-[var(--textDark)] overflow-hidden transition-all duration-300 ease-in-out active:scale-105 hover:scale-105"
                                                    >
                                                        {/* Contenedor que sube al hover */}
                                                        <div className="flex flex-col h-full justify-center transition-transform duration-300 ease-in-out group-hover:-translate-y-10 group-active:-translate-y-10">

                                                            {/* Imagen con mask animado */}
                                                            <div className="w-full h-1/2 overflow-hidden">
                                                                <img
                                                                    src={p.imagen}
                                                                    alt={p.nombre}
                                                                    className="object-cover w-full h-full transition-all duration-300 ease-in-out group-hover:mask-b-from-70% group-hover:mask-b-to-90% group-active:mask-b-from-70% group-active:mask-b-to-90%"
                                                                />
                                                            </div>

                                                            {/* Nombre */}
                                                            <div>
                                                                <h3
                                                                    className="font-bold py-1 text-center text-md lg:text-xl bg-[var(--textDark)]/70 mask-y-from-80% mask-y-to-90% transition-all duration-300 ease-in-out"
                                                                >
                                                                    {p.nombre}
                                                                </h3>
                                                            </div>

                                                            {/* Tecnologías */}
                                                            <div className="flex gap-5 mt-2 justify-center">
                                                                {p.tecnologias.map((x, i) => (
                                                                    <div key={i}>
                                                                        <TechIcon tech={x} size={35} />
                                                                    </div>
                                                                ))}
                                                            </div>
                                                            <div className="hidden flex gap-5 mt-2 justify-center transition-all duration-300 ease-in-out group-hover:flex group-active:flex">
                                                                {p.link.map((x, i) => (
                                                                    <a key={i} href={stringHaveGithub(x)} className={boolHaveGithub(x)}>
                                                                        <TechIcon tech={stringHaveGithub(x)} size={35} />
                                                                    </a>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className='absolute z-40 right-55 lg:right-324 top-12 lg:top-1/2 -translate-y-1/2 rounded-full'>
                                            <GlassSurface
                                                className='w-full! h-full! p-2'
                                                borderRadius={60}
                                                displace={2}
                                                distortionScale={-150}
                                                redOffset={5}
                                                greenOffset={15}
                                                blueOffset={25}
                                                brightness={60}
                                                opacity={0.8}
                                                mixBlendMode="screen"
                                            >
                                                <button onClick={handlePrev} className="text-[var(--textDark)] bg-[var(--textLight)] rounded-full cursor-pointer">
                                                    <MdNavigateBefore size={35} />
                                                </button>
                                            </GlassSurface>
                                        </div>

                                        <div className='absolute z-40 left-55 lg:left-324 top-12 lg:top-1/2 -translate-y-1/2 rounded-full'>
                                            <GlassSurface
                                                className='w-full! h-full! p-2'
                                                borderRadius={60}
                                                displace={2}
                                                distortionScale={-150}
                                                redOffset={5}
                                                greenOffset={15}
                                                blueOffset={25}
                                                brightness={60}
                                                opacity={0.8}
                                                mixBlendMode="screen"
                                            >
                                                <button onClick={handleNext} className="text-[var(--textDark)] bg-[var(--textLight)] rounded-full cursor-pointer">
                                                    <MdNavigateNext size={35} />
                                                </button>
                                            </GlassSurface>
                                        </div>


                                        <GradualBlur
                                            target="parent"
                                            position="left"
                                            height="2rem"
                                            strength={2}
                                            divCount={5}
                                            curve="bezier"
                                            exponential={true}
                                            opacity={1}
                                            zIndex={30}
                                        />
                                        <GradualBlur
                                            target="parent"
                                            position="right"
                                            height="2rem"
                                            strength={2}
                                            divCount={5}
                                            curve="bezier"
                                            exponential={true}
                                            opacity={1}
                                            zIndex={30}
                                        />
                                    </section>
                                </div>
                                <GradualBlur
                                    target="parent"
                                    position="top"
                                    height="6rem"
                                    strength={2}
                                    divCount={5}
                                    curve="bezier"
                                    exponential={true}
                                    opacity={1}
                                    zIndex={30}
                                />
                            </div>
                        </div>

                        <div className='pb-10 h-full w-full' ref={perfilP}>
                            <div className='relative z-10 inset-0 w-full flex flex-col gap-10'>
                                <div className="flex flex-col lg:flex-row text-start h-[75vh] mx-1 mt-20 lg:mx-60 gap-2 lg:gap-10 shrink justify-center">
                                    <section className='col-span-4 py-4 content-center bg-[var(--textLight)]/10 backdrop-blur-[4px] rounded-4xl px-10 border-3 border-[var(--bg)] w-full h-4/5 lg:w-1/2'>
                                        <div className='border-b-5 w-3/4 pb-1'>
                                            <h2 className='text-xl lg:text-3xl font-bold'>EXPERIENCIA LABORAL</h2>
                                        </div>
                                        <div className='mt-2 pb-4'>
                                            <div className='flex gap-10'>
                                                <label className="text-md lg:text-xl text-start font-bold">Alcaldía Mayor de Cartagena</label>
                                                <label className="text-sm lg:text-lg text-end font-normal">JUN 2024 - DIC 2024</label>
                                            </div>
                                            <div>
                                                <label className="text-sm lg:text-lg text-justify font-medium">Practicante de desarrollo</label>
                                            </div>
                                            <ul className='list-disc w-1/2 text-sm lg:text-lg'>
                                                <li>Apoyo en el desarrollo de formularios internos e inventarios para mejorar procesos administrativos.</li>
                                                <li>Participación en la creación del prototipo web para el Cuerpo de Bomberos.</li>
                                                <li>Colaboración logística y técnica en proyectos digitales institucionales.</li>
                                            </ul>
                                        </div>
                                        <div className='w-3/4 border-b-5 justify-self-end'></div>
                                    </section>

                                    <section className='col-span-4 py-4 content-center bg-[var(--textLight)]/10 backdrop-blur-[4px] rounded-4xl px-10 border-3 border-[var(--bg)] w-full h-4/5 lg:w-1/2'>
                                        <div className='border-b-5 w-3/4 pb-1'>
                                            <h2 className='text-xl lg:text-3xl font-bold'>EDUCACIÓN</h2>
                                        </div>
                                        <div className='mt-2'>
                                            <div>
                                                <div>
                                                    <label className="text-md lg:text-xl text-start font-bold">Tecnólogo en Desarrollo de Software</label>
                                                </div>
                                                <div>
                                                    <label className="text-sm lg:text-lg text-justify font-medium">Fundación Universitaria Tecnológico Comfenalco</label>
                                                </div>
                                                <div>
                                                    <label className="text-sm lg:text-lg text-end font-normal">JUN 2024 - DIC 2024</label>
                                                </div>
                                            </div>
                                            <div className='mt-2'>
                                                <div>
                                                    <label className="text-md lg:text-xl text-start font-bold">Bilingüismo - B2</label>
                                                </div>
                                                <div>
                                                    <label className="text-sm lg:text-lg text-justify font-medium">Colombo Americano</label>
                                                </div>
                                                <div>
                                                    <label className="text-sm lg:text-lg text-end font-normal">Jun 2022 - Nov 2023</label>
                                                </div>
                                            </div>
                                            <div className='mt-2'>
                                                <div>
                                                    <label className="text-md lg:text-xl text-start font-bold">Curso de oratoria para Lideres</label>
                                                </div>
                                                <div>
                                                    <label className="text-sm lg:text-lg text-justify font-medium">Certificacion por curso de oratoria en las becas boomerang</label>
                                                </div>
                                                <div>
                                                    <label className="text-sm lg:text-lg text-end font-normal">2022</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='w-3/4 border-b-5 justify-self-end'></div>
                                    </section>
                                </div>

                                <div className='h-2/12 mx-10 mt-10 lg:mx-80 relative'>
                                    <GlassSurface
                                        className='w-full! h-full! pt-30 pb-10'
                                        borderRadius={60}
                                        displace={2}
                                        distortionScale={-150}
                                        redOffset={5}
                                        greenOffset={15}
                                        blueOffset={25}
                                        brightness={60}
                                        opacity={0.8}
                                        mixBlendMode="screen"
                                    >
                                        <label className='font-black text-5xl lg:text-7xl!'>
                                            Contacto
                                        </label>
                                    </GlassSurface>
                                </div>
                            </div>
                        </div>

                        <div className='pb-10 h-full w-full flex justify-center px-10 lg:px-0' ref={contacto}>
                            <div className='relative z-10 inset-0 w-full lg:w-3/8 flex flex-col gap-10 h-3/4 bg-[var(--textLight)]/10 self-end mb-5 backdrop-blur-[4px] rounded-4xl border-3 border-[var(--bg)] justify-center'>
                                <ol className='flex flex-col gap-10 list-none text-md lg:text-2xl border-y-5 py-20'>
                                    <li>
                                        <div className='flex gap-5 justify-center'>
                                            <div>
                                                <i class="fa-solid fa-phone fa-2xl"></i>
                                            </div>
                                            <div>
                                                <label>+57 302 276 4131</label>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='flex gap-5 justify-center'>
                                            <div>
                                                <i class="fa-regular fa-envelope fa-2xl"></i>
                                            </div>
                                            <div>
                                                <label>alejo802.s.o@gmail.com</label>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='flex gap-5 justify-center px-10 lg:px-0'>
                                            <div className='content-center'>
                                                <i class="fa-solid fa-location-dot fa-2xl"></i>
                                            </div>
                                            <div className='flex flex-col gap-1 text-center'>
                                                <p>Cartagena, Colombia.</p>
                                                <p>Disponibilidad para cambio de residencia</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='flex justify-center'>
                                        <a href="https://www.linkedin.com/in/alejandro-socarras-olascuaga-1a3760331/">
                                            <i class="fa-brands fa-linkedin-in fa-beat fa-2xl"></i>
                                        </a>
                                    </li>
                                </ol>
                            </div>
                        </div>

                        <div className='sticky z-40 bottom-5 lg:bottom-15 flex justify-center w-full h-1/13 lg:h-1/20'>
                            <motion.div className='relative w-1/6 lg:w-1/24 h-full cursor-pointer'
                                onClick={scrollToInicio}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 1, ease: "easeOut" }}

                            >
                                <GlassSurface
                                    className='w-full! h-full! m-0! lg:p-10!'
                                    borderRadius={60}
                                    displace={2}
                                    distortionScale={-150}
                                    redOffset={5}
                                    greenOffset={15}
                                    blueOffset={25}
                                    brightness={60}
                                    opacity={0.8}
                                    mixBlendMode="screen"
                                >
                                    <label className='text-xl! cursor-pointer'>
                                        <i class="fa-solid fa-up-long fa-2xl"></i>
                                    </label>
                                </GlassSurface>
                            </motion.div>
                        </div>
                    </div>

                </div>

                <GradualBlur
                    target="page"
                    position="top"
                    height="2rem"
                    strength={2}
                    divCount={5}
                    curve="bezier"
                    exponential={true}
                    opacity={1}
                />

                <GradualBlur
                    target="page"
                    position="bottom"
                    height="2rem"
                    strength={2}
                    divCount={5}
                    curve="bezier"
                    exponential={true}
                    opacity={1}
                />
            </main>
        </>
    )
}

export default App

