import React, { useState, useEffect } from "react";
import {
  Mail,
  Linkedin,
  Github,
  Code,
  Server,
  Cloud,
  Briefcase,
  Award,
  ChevronRight,
  Terminal,
  Zap,
  Cpu,
  Database,
} from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const skills = {
    cloud: ["AWS EC2", "AWS IAM", "AWS CodeCommit", "AWS Policies"],
    frontend: [
      "React.js",
      "React TypeScript",
      "Vite",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
    ],
    backend: ["Python", "Ignition Scripting"],
    tools: ["ChatGPT", "Claude AI", "Perplexity", "Gemini"],
    specialized: [
      "Ignition Perspective",
      "PLC/SCADA Integration",
      "Industrial Automation",
    ],
  };

  const projects = [
    {
      title: "Industrial Simulation Systems",
      description:
        "Created animated simulations for manufacturing industries using PLC/SCADA sensor data in Ignition Perspective",
      tech: ["Ignition", "SCADA", "Animation"],
      icon: Cpu,
    },
    {
      title: "React Flow Chart Component",
      description:
        "Developed hierarchical flow chart components with dual compatibility for JavaScript and TypeScript",
      tech: ["React", "JavaScript", "TypeScript"],
      icon: Terminal,
    },
    {
      title: "Gantt Chart Scheduling Tool",
      description:
        "Built a comprehensive Gantt chart component for project scheduling and planning",
      tech: ["React", "TypeScript", "Scheduling"],
      icon: Database,
    },
    {
      title: "React Application Architecture",
      description:
        "Led research and development of full-stack React applications from scratch, including CI/CD setup",
      tech: ["React", "AWS", "Architecture"],
      icon: Zap,
    },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 194, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 194, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            transform: `perspective(1000px) rotateX(60deg) translateY(-50%)`,
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 194, 255, 0.8), transparent)",
            left: `${mousePosition.x - 192}px`,
            top: `${mousePosition.y - 192}px`,
            transition: "left 0.3s ease-out, top 0.3s ease-out",
          }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-xl z-50 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">PV</span>
              </div>
              <div className="hidden md:block">
                <div className="text-white font-bold text-lg tracking-tight">
                  Prashant Vaghela
                </div>
                <div className="text-cyan-400 text-xs">Software Engineer</div>
              </div>
            </div>
            <div className="flex gap-1 bg-white/5 rounded-full p-1 border border-cyan-500/20">
              {["about", "experience", "skills", "projects"].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`capitalize px-4 py-2 rounded-full transition-all text-sm ${
                    activeSection === section
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8 relative z-10">
            <div className="inline-block">
              <div className="flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <span className="text-cyan-400 text-sm">
                  Available for opportunities
                </span>
              </div>
            </div>

            <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent leading-tight">
              Prashant Vaghela
            </h1>

            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500" />
              <p className="text-2xl text-cyan-400 font-semibold tracking-wide">
                Software Developer @ Leanqubit
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500" />
            </div>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Architecting cutting-edge{" "}
              <span className="text-cyan-400 font-semibold">web solutions</span>{" "}
              and{" "}
              <span className="text-cyan-400 font-semibold">
                industrial automation systems
              </span>{" "}
              for next-generation manufacturing intelligence
            </p>

            <div className="flex justify-center gap-4 pt-8">
              {[
                {
                  icon: Mail,
                  color: "from-cyan-500 to-blue-500",
                  href: "mailto:prashvagh@gmail.com",
                },
                {
                  icon: Linkedin,
                  color: "from-blue-500 to-indigo-500",
                  href: "https://www.linkedin.com/in/prashant-vaghela-60283a233/",
                },
                {
                  icon: Github,
                  color: "from-purple-500 to-pink-500",
                  href: "https://github.com/prashant-Vagh",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="relative group p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all">
                    <item.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    <div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 blur transition-opacity`}
                    />
                  </button>
                </a>
              ))}
            </div>

            {/* Floating Stats */}
            <div className="flex justify-center gap-8 pt-12">
              {[
                { value: "2+", label: "Years", icon: Briefcase },
                { value: "15+", label: "Technologies", icon: Code },
                { value: "4+", label: "Projects", icon: Terminal },
              ].map((stat, i) => (
                <div key={i} className="relative group">
                  <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-6 backdrop-blur-sm hover:border-cyan-500/50 transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <stat.icon className="w-5 h-5 text-cyan-400" />
                      <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pb-20 relative z-10">
        {/* About Section */}
        {activeSection === "about" && (
          <div className="space-y-8 animate-fadeIn">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-500/50" />
              <h3 className="text-4xl font-bold text-white">About Me</h3>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-500/50" />
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a passionate{" "}
                  <span className="text-cyan-400 font-semibold">
                    Software Developer
                  </span>{" "}
                  with 2 years of experience at Leanqubit, specializing in
                  creating innovative solutions for manufacturing intelligence.
                  My expertise lies in bridging the gap between industrial
                  automation and modern web technologies.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I've successfully led teams in developing complex React
                  applications, industrial simulation systems, and specialized
                  components for project management. My work involves everything
                  from PLC/SCADA integration to cloud infrastructure on AWS.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  As a{" "}
                  <span className="text-cyan-400 font-semibold">
                    technical leader
                  </span>
                  , I focus on architectural planning, research-driven
                  development, and mentoring team members to deliver
                  high-quality solutions that meet business objectives.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-cyan-500/20">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-300">
                      <Terminal className="w-5 h-5 text-cyan-400" />
                      <span className="font-semibold">
                        Full-Stack Development
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Cpu className="w-5 h-5 text-cyan-400" />
                      <span className="font-semibold">
                        Industrial Automation
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-300">
                      <Cloud className="w-5 h-5 text-cyan-400" />
                      <span className="font-semibold">Cloud Architecture</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Award className="w-5 h-5 text-cyan-400" />
                      <span className="font-semibold">Team Leadership</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Experience Section */}
        {activeSection === "experience" && (
          <div className="space-y-8 animate-fadeIn">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-500/50" />
              <h3 className="text-4xl font-bold text-white flex items-center gap-3">
                <Briefcase className="w-8 h-8 text-cyan-400" />
                Professional Experience
              </h3>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-500/50" />
            </div>

            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent" />

              <div className="ml-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
                <div className="flex items-start gap-4 mb-8">
                  <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-500/30">
                    <Award className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold text-white mb-2">
                      Software Developer
                    </h4>
                    <p className="text-cyan-400 font-medium text-lg">
                      Leanqubit • 2 Years
                    </p>
                    <div className="flex gap-2 mt-3">
                      <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs border border-cyan-500/30">
                        Full-Time
                      </span>
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs border border-blue-500/30">
                        Tech Lead
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                      Key Achievements
                    </h5>
                    <div className="space-y-4">
                      {[
                        "Developed animated industrial simulations using PLC/SCADA sensor data in Ignition Perspective, bringing real-time manufacturing data to life",
                        "Built reusable React components including flow charts and Gantt charts with JavaScript/TypeScript dual compatibility",
                        "Led research and architecture of React applications from scratch, including AWS infrastructure setup",
                      ].map((achievement, i) => (
                        <div key={i} className="flex items-start gap-4 group">
                          <div className="mt-1.5">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform" />
                          </div>
                          <span className="text-gray-300 leading-relaxed">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 border-t border-cyan-500/20">
                    <h5 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                      Leadership Responsibilities
                    </h5>
                    <div className="space-y-4">
                      {[
                        "Lead development teams and coordinate task assignments to ensure timely project delivery",
                        "Research and develop core components for enterprise applications",
                        "Plan and architect scalable solutions based on business requirements",
                      ].map((responsibility, i) => (
                        <div key={i} className="flex items-start gap-4 group">
                          <div className="mt-1.5">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform" />
                          </div>
                          <span className="text-gray-300 leading-relaxed">
                            {responsibility}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Skills Section */}
        {activeSection === "skills" && (
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-500/50" />
              <h3 className="text-4xl font-bold text-white flex items-center gap-3">
                <Code className="w-8 h-8 text-cyan-400" />
                Technical Arsenal
              </h3>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-500/50" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Cloud & Infrastructure",
                  skills: skills.cloud,
                  icon: Cloud,
                  gradient: "from-cyan-500 to-blue-500",
                },
                {
                  title: "Frontend Development",
                  skills: skills.frontend,
                  icon: Code,
                  gradient: "from-green-500 to-emerald-500",
                },
                {
                  title: "Backend & Scripting",
                  skills: skills.backend,
                  icon: Server,
                  gradient: "from-purple-500 to-pink-500",
                },
                {
                  title: "AI & Tools",
                  skills: skills.tools,
                  icon: Zap,
                  gradient: "from-orange-500 to-red-500",
                },
              ].map((category, i) => (
                <div
                  key={i}
                  className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-3xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all"
                >
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity`}
                  />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className={`p-3 bg-gradient-to-br ${category.gradient} bg-opacity-10 rounded-xl`}
                      >
                        <category.icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <h4 className="text-xl font-semibold text-white">
                        {category.title}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 bg-white/5 text-gray-300 rounded-lg text-sm border border-cyan-500/20 hover:border-cyan-500/50 hover:text-cyan-400 transition-all cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <div className="md:col-span-2 group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-3xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-10 blur-xl transition-opacity" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 bg-opacity-10 rounded-xl">
                      <Cpu className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h4 className="text-xl font-semibold text-white">
                      Specialized Expertise
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.specialized.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400 rounded-lg text-sm border border-cyan-500/30 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20 transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Projects Section */}
        {activeSection === "projects" && (
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-500/50" />
              <h3 className="text-4xl font-bold text-white">
                Featured Projects
              </h3>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-500/50" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, i) => (
                <div
                  key={i}
                  className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:scale-105"
                >
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-10 blur-xl transition-opacity" />
                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-500/30">
                        <project.icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-cyan-400 transition-colors" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/5 text-gray-400 rounded-lg text-xs border border-white/10 group-hover:border-cyan-500/30 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="relative bg-black/40 backdrop-blur-xl border-t border-cyan-500/20 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="text-white font-bold text-lg mb-2">
                Prashant Vaghela
              </div>
              <p className="text-gray-400 text-sm">
                Building the future of manufacturing intelligence
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-gray-400 text-sm">
                © 2025 All rights reserved
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
