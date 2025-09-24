// Datos del curso y exámenes
const courseData = {
    1: {
        title: "Introducción al Podcasting",
        description: "En esta primera clase aprenderás los conceptos básicos del podcasting y cómo encontrar tu nicho ideal.",
        duration: "30 min",
        videoUrl: "https://www.youtube.com/embed/ejemplo1",
        resources: [
            { type: "video", name: "Video de la clase (30 min)", url: "#" },
            { type: "pdf", name: "Guía de nichos de podcasting", url: "#" },
            { type: "list", name: "Lista de verificación", url: "#" }
        ],
        exam: {
            questions: [
                {
                    question: "¿Cuál es la duración ideal para un episodio de podcast?",
                    answers: [
                        "A) 5-10 minutos",
                        "B) 15-45 minutos", 
                        "C) 1-2 horas",
                        "D) No hay duración ideal"
                    ],
                    correct: 3
                },
                {
                    question: "¿Qué es un podcast?",
                    answers: [
                        "A) Un programa de radio en vivo",
                        "B) Un archivo de audio digital distribuido por internet",
                        "C) Un video de YouTube",
                        "D) Un blog escrito"
                    ],
                    correct: 1
                },
                {
                    question: "¿Cuál es el primer paso para crear un podcast?",
                    answers: [
                        "A) Comprar equipamiento caro",
                        "B) Definir tu nicho y audiencia objetivo",
                        "C) Grabar el primer episodio",
                        "D) Crear un sitio web"
                    ],
                    correct: 1
                },
                {
                    question: "¿Qué plataforma es la más popular para escuchar podcasts?",
                    answers: [
                        "A) YouTube",
                        "B) Spotify",
                        "C) Apple Podcasts",
                        "D) Google Podcasts"
                    ],
                    correct: 1
                },
                {
                    question: "¿Con qué frecuencia se recomienda publicar un podcast?",
                    answers: [
                        "A) Diariamente",
                        "B) Semanalmente",
                        "C) Mensualmente",
                        "D) Depende de tu capacidad y audiencia"
                    ],
                    correct: 3
                }
            ]
        }
    },
    2: {
        title: "Equipamiento y Software",
        description: "Aprende qué equipo necesitas para empezar y qué software usar para grabar y editar.",
        duration: "35 min",
        videoUrl: "https://www.youtube.com/embed/ejemplo2",
        resources: [
            { type: "video", name: "Video de la clase (35 min)", url: "#" },
            { type: "list", name: "Lista de equipamiento recomendado", url: "#" }
        ],
        exam: {
            questions: [
                {
                    question: "¿Cuál es el micrófono más recomendado para principiantes?",
                    answers: [
                        "A) Micrófono de condensador USB",
                        "B) Micrófono de dinámico XLR",
                        "C) Micrófono de lavalier",
                        "D) Cualquiera de los anteriores"
                    ],
                    correct: 0
                },
                {
                    question: "¿Qué software es gratuito para editar audio?",
                    answers: [
                        "A) Adobe Audition",
                        "B) Audacity",
                        "C) Pro Tools",
                        "D) Logic Pro"
                    ],
                    correct: 1
                },
                {
                    question: "¿Qué es un pop filter?",
                    answers: [
                        "A) Un filtro para mejorar la calidad del audio",
                        "B) Un filtro para reducir los sonidos de 'p' y 'b'",
                        "C) Un filtro para eliminar el ruido de fondo",
                        "D) Un filtro para cambiar el tono de voz"
                    ],
                    correct: 1
                },
                {
                    question: "¿Cuál es la frecuencia de muestreo recomendada para podcasts?",
                    answers: [
                        "A) 22.05 kHz",
                        "B) 44.1 kHz",
                        "C) 48 kHz",
                        "D) 96 kHz"
                    ],
                    correct: 1
                },
                {
                    question: "¿Qué es un audífono?",
                    answers: [
                        "A) Un dispositivo para escuchar música",
                        "B) Un dispositivo para monitorear el audio mientras grabas",
                        "C) Un dispositivo para grabar audio",
                        "D) Un dispositivo para editar audio"
                    ],
                    correct: 1
                }
            ]
        }
    },
    3: {
        title: "Estructura y Guión",
        description: "Crea la estructura perfecta para tu podcast y aprende a escribir guiones efectivos.",
        duration: "40 min",
        videoUrl: "https://www.youtube.com/embed/ejemplo3",
        resources: [
            { type: "video", name: "Video de la clase (40 min)", url: "#" },
            { type: "template", name: "Plantilla de estructura de episodio", url: "#" }
        ],
        exam: {
            questions: [
                {
                    question: "¿Cuáles son los elementos básicos de un episodio de podcast?",
                    answers: [
                        "A) Introducción, contenido principal, despedida",
                        "B) Solo el contenido principal",
                        "C) Introducción, contenido principal, música, despedida",
                        "D) Introducción, contenido principal, publicidad, despedida"
                    ],
                    correct: 0
                },
                {
                    question: "¿Cuánto tiempo debe durar la introducción de un podcast?",
                    answers: [
                        "A) 30 segundos",
                        "B) 1-2 minutos",
                        "C) 5 minutos",
                        "D) Depende del contenido"
                    ],
                    correct: 1
                },
                {
                    question: "¿Qué incluye un guión de podcast?",
                    answers: [
                        "A) Solo las palabras exactas a decir",
                        "B) Puntos clave, transiciones y timing",
                        "C) Solo la estructura general",
                        "D) Solo las preguntas a hacer"
                    ],
                    correct: 1
                },
                {
                    question: "¿Cuál es el propósito de las transiciones en un podcast?",
                    answers: [
                        "A) Hacer el podcast más largo",
                        "B) Conectar diferentes secciones de manera fluida",
                        "C) Añadir música de fondo",
                        "D) Dar tiempo para respirar"
                    ],
                    correct: 1
                },
                {
                    question: "¿Qué es un hook en un podcast?",
                    answers: [
                        "A) Un gancho para colgar el micrófono",
                        "B) Una frase o elemento que captura la atención del oyente",
                        "C) Un error en la grabación",
                        "D) Un tipo de música de fondo"
                    ],
                    correct: 1
                }
            ]
        }
    },
    4: {
        title: "Técnicas de Grabación",
        description: "Domina las técnicas de grabación profesional y optimiza la calidad de tu audio.",
        duration: "45 min",
        videoUrl: "https://www.youtube.com/embed/ejemplo4",
        resources: [
            { type: "video", name: "Video de la clase (45 min)", url: "#" },
            { type: "practice", name: "Ejercicios de grabación", url: "#" }
        ],
        exam: {
            questions: [
                {
                    question: "¿Cuál es la distancia ideal entre el micrófono y la boca?",
                    answers: [
                        "A) 5-10 cm",
                        "B) 15-20 cm",
                        "C) 30-40 cm",
                        "D) 50 cm o más"
                    ],
                    correct: 1
                },
                {
                    question: "¿Qué es el nivel de grabación recomendado?",
                    answers: [
                        "A) -12 dB a -6 dB",
                        "B) 0 dB",
                        "C) -20 dB a -12 dB",
                        "D) +6 dB"
                    ],
                    correct: 0
                },
                {
                    question: "¿Cómo se evita el ruido de fondo en la grabación?",
                    answers: [
                        "A) Grabando en una habitación vacía",
                        "B) Usando un espacio acústicamente tratado",
                        "C) Cerrando todas las ventanas",
                        "D) Todas las anteriores"
                    ],
                    correct: 3
                },
                {
                    question: "¿Qué es el 'dead air' en un podcast?",
                    answers: [
                        "A) Un micrófono que no funciona",
                        "B) Silencios prolongados sin contenido",
                        "C) Audio de baja calidad",
                        "D) Ruido de fondo"
                    ],
                    correct: 1
                },
                {
                    question: "¿Cuál es la mejor posición para grabar?",
                    answers: [
                        "A) De pie",
                        "B) Sentado cómodamente",
                        "C) Acostado",
                        "D) Caminando"
                    ],
                    correct: 1
                }
            ]
        }
    },
    5: {
        title: "Edición de Audio",
        description: "Aprende a editar tu podcast como un profesional usando herramientas gratuitas.",
        duration: "50 min",
        videoUrl: "https://www.youtube.com/embed/ejemplo5",
        resources: [
            { type: "video", name: "Video de la clase (50 min)", url: "#" },
            { type: "project", name: "Archivo de práctica", url: "#" }
        ],
        exam: {
            questions: [
                {
                    question: "¿Cuál es el primer paso en la edición de audio?",
                    answers: [
                        "A) Añadir música de fondo",
                        "B) Escuchar toda la grabación",
                        "C) Eliminar todos los silencios",
                        "D) Normalizar el audio"
                    ],
                    correct: 1
                },
                {
                    question: "¿Qué es la normalización de audio?",
                    answers: [
                        "A) Cambiar el formato del archivo",
                        "B) Ajustar el volumen para que sea consistente",
                        "C) Eliminar el ruido de fondo",
                        "D) Añadir efectos especiales"
                    ],
                    correct: 1
                },
                {
                    question: "¿Cuánto tiempo de silencio se recomienda entre secciones?",
                    answers: [
                        "A) 0.5 segundos",
                        "B) 1-2 segundos",
                        "C) 5 segundos",
                        "D) 10 segundos"
                    ],
                    correct: 1
                },
                {
                    question: "¿Qué es el fade in/fade out?",
                    answers: [
                        "A) Un efecto de eco",
                        "B) Aumento/disminución gradual del volumen",
                        "C) Un filtro de audio",
                        "D) Un tipo de compresión"
                    ],
                    correct: 1
                },
                {
                    question: "¿Cuál es el formato de audio recomendado para podcasts?",
                    answers: [
                        "A) WAV",
                        "B) MP3",
                        "C) FLAC",
                        "D) AAC"
                    ],
                    correct: 1
                }
            ]
        }
    },
    6: {
        title: "Música y Efectos",
        description: "Añade música de fondo, efectos sonoros y crea una identidad auditiva única.",
        duration: "35 min",
        videoUrl: "https://www.youtube.com/embed/ejemplo6",
        resources: [
            { type: "video", name: "Video de la clase (35 min)", url: "#" },
            { type: "library", name: "Biblioteca de música libre de derechos", url: "#" }
        ],
        exam: {
            questions: [
                {
                    question: "¿Qué es la música de fondo en un podcast?",
                    answers: [
                        "A) Música que se reproduce al mismo volumen que la voz",
                        "B) Música que acompaña sutilmente el contenido",
                        "C) Música que reemplaza la voz",
                        "D) Música que se reproduce solo al inicio"
                    ],
                    correct: 1
                },
                {
                    question: "¿Cuál es el volumen recomendado para la música de fondo?",
                    answers: [
                        "A) -20 dB a -15 dB",
                        "B) -10 dB a -5 dB",
                        "C) 0 dB",
                        "D) +5 dB"
                    ],
                    correct: 0
                },
                {
                    question: "¿Qué son los efectos de transición?",
                    answers: [
                        "A) Efectos que cambian la voz",
                        "B) Efectos que conectan diferentes secciones",
                        "C) Efectos que eliminan el ruido",
                        "D) Efectos que añaden eco"
                    ],
                    correct: 1
                },
                {
                    question: "¿Dónde se puede encontrar música libre de derechos?",
                    answers: [
                        "A) Solo en YouTube",
                        "B) En bibliotecas de música libre como Freesound",
                        "C) Solo en Spotify",
                        "D) Solo en Apple Music"
                    ],
                    correct: 1
                },
                {
                    question: "¿Qué es un jingle en un podcast?",
                    answers: [
                        "A) Un tipo de micrófono",
                        "B) Una melodía corta que identifica el podcast",
                        "C) Un efecto de audio",
                        "D) Un tipo de compresión"
                    ],
                    correct: 1
                }
            ]
        }
    },
    7: {
        title: "Distribución y Plataformas",
        description: "Publica tu podcast en Spotify, Apple Podcasts, Google Podcasts y más plataformas.",
        duration: "40 min",
        videoUrl: "https://www.youtube.com/embed/ejemplo7",
        resources: [
            { type: "video", name: "Video de la clase (40 min)", url: "#" },
            { type: "guide", name: "Guía de plataformas de distribución", url: "#" }
        ],
        exam: {
            questions: [
                {
                    question: "¿Qué es un RSS feed en podcasting?",
                    answers: [
                        "A) Un archivo de audio",
                        "B) Un archivo XML que contiene información del podcast",
                        "C) Un sitio web del podcast",
                        "D) Un archivo de imagen"
                    ],
                    correct: 1
                },
                {
                    question: "¿Cuál es la plataforma más popular para podcasts?",
                    answers: [
                        "A) YouTube",
                        "B) Spotify",
                        "C) Apple Podcasts",
                        "D) Google Podcasts"
                    ],
                    correct: 1
                },
                {
                    question: "¿Qué información necesita un podcast para ser distribuido?",
                    answers: [
                        "A) Solo el archivo de audio",
                        "B) Título, descripción, imagen y archivo de audio",
                        "C) Solo el título",
                        "D) Solo la descripción"
                    ],
                    correct: 1
                },
                {
                    question: "¿Qué es un host de podcast?",
                    answers: [
                        "A) La persona que presenta el podcast",
                        "B) Un servicio que almacena y distribuye el podcast",
                        "C) Un tipo de micrófono",
                        "D) Un software de edición"
                    ],
                    correct: 1
                },
                {
                    question: "¿Cuánto tiempo tarda en aparecer un podcast en las plataformas?",
                    answers: [
                        "A) Inmediatamente",
                        "B) 24-48 horas",
                        "C) 1 semana",
                        "D) 1 mes"
                    ],
                    correct: 1
                }
            ]
        }
    },
    8: {
        title: "Marketing y Crecimiento",
        description: "Estrategias para promocionar tu podcast y hacer crecer tu audiencia.",
        duration: "45 min",
        videoUrl: "https://www.youtube.com/embed/ejemplo8",
        resources: [
            { type: "video", name: "Video de la clase (45 min)", url: "#" },
            { type: "template", name: "Plantilla de plan de marketing", url: "#" }
        ],
        exam: {
            questions: [
                {
                    question: "¿Cuál es la mejor estrategia para promocionar un podcast?",
                    answers: [
                        "A) Solo usar redes sociales",
                        "B) Crear contenido de calidad y promocionarlo consistentemente",
                        "C) Solo hacer publicidad pagada",
                        "D) Solo depender del boca a boca"
                    ],
                    correct: 1
                },
                {
                    question: "¿Qué es el SEO para podcasts?",
                    answers: [
                        "A) Optimización de motores de búsqueda para podcasts",
                        "B) Un tipo de micrófono",
                        "C) Un software de edición",
                        "D) Un formato de audio"
                    ],
                    correct: 0
                },
                {
                    question: "¿Cuál es la frecuencia ideal para publicar en redes sociales?",
                    answers: [
                        "A) Una vez al mes",
                        "B) Una vez por semana",
                        "C) Diariamente",
                        "D) Depende de tu capacidad y audiencia"
                    ],
                    correct: 3
                },
                {
                    question: "¿Qué es el engagement en podcasting?",
                    answers: [
                        "A) El número de descargas",
                        "B) La interacción y participación de la audiencia",
                        "C) La duración del podcast",
                        "D) La calidad del audio"
                    ],
                    correct: 1
                },
                {
                    question: "¿Cuál es la mejor manera de hacer crecer una audiencia?",
                    answers: [
                        "A) Comprar seguidores",
                        "B) Crear contenido valioso y interactuar con la audiencia",
                        "C) Solo hacer publicidad",
                        "D) Copiar otros podcasts exitosos"
                    ],
                    correct: 1
                }
            ]
        }
    }
};

// Variables globales
let currentClass = 1;
let currentQuestion = 0;
let userAnswers = [];
let examScore = 0;

// Funciones de navegación
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Funciones de la plataforma
function openCourse(courseId) {
    if (courseId === 'podcast') {
        window.open('curso-podcast.html', '_blank');
    } else {
        alert('Este curso estará disponible próximamente');
    }
}

function closeCourseModal() {
    document.getElementById('courseDetailModal').style.display = 'none';
}

function startCourse() {
    window.open('curso-podcast.html', '_blank');
}

function addToWishlist() {
    showNotification('Curso añadido a favoritos', 'success');
}

function toggleNotes() {
    showNotification('Funcionalidad de notas próximamente', 'info');
}

function toggleBookmark() {
    showNotification('Clase marcada', 'success');
}

function completeLesson() {
    showNotification('¡Clase completada!', 'success');
    // Aquí se desbloquearía la siguiente clase
}

function nextLesson() {
    showNotification('Completa la clase actual primero', 'warning');
}

function startExam() {
    // Usar la función existente del examen
    const classData = courseData[1];
    currentQuestion = 0;
    userAnswers = [];
    examScore = 0;
    
    document.getElementById('totalQuestions').textContent = classData.exam.questions.length;
    
    showQuestion();
    document.getElementById('examModal').style.display = 'block';
}

// Funciones de Instructores
function viewInstructorProfile(instructorId) {
    const instructorData = {
        'maria': {
            name: 'María González',
            title: 'Productora de Podcasts',
            description: 'Con más de 5 años de experiencia en la industria del podcasting, María ha producido más de 200 episodios y ha ayudado a cientos de creadores a lanzar sus propios podcasts.',
            episodes: '200+',
            students: '500+',
            rating: '4.9',
            courses: ['Crea tu Primer Podcast', 'Edición de Audio Avanzada', 'Marketing para Podcasters']
        },
        'carlos': {
            name: 'Carlos Rodríguez',
            title: 'Diseñador Web Senior',
            description: 'Diseñador web con más de 8 años de experiencia, especializado en diseño UX/UI y desarrollo frontend. Ha trabajado con empresas como Google y Microsoft.',
            episodes: '150+',
            students: '800+',
            rating: '4.8',
            courses: ['Diseño Web Moderno', 'UX/UI Design Masterclass', 'JavaScript Avanzado']
        },
        'ana': {
            name: 'Ana Martínez',
            title: 'Especialista en Marketing Digital',
            description: 'Experta en marketing digital con más de 10 años de experiencia. Ha ayudado a más de 1000 empresas a crecer sus ventas online.',
            episodes: '1000+',
            students: '1200+',
            rating: '4.9',
            courses: ['Marketing Digital Completo', 'SEO y SEM Avanzado', 'Redes Sociales para Negocios']
        },
        'david': {
            name: 'David López',
            title: 'Desarrollador Full Stack',
            description: 'Desarrollador full stack con más de 7 años de experiencia en tecnologías modernas como React, Node.js, Python y más.',
            episodes: '50+',
            students: '600+',
            rating: '4.7',
            courses: ['JavaScript desde Cero', 'React Masterclass', 'Node.js Backend Development']
        }
    };
    
    const instructor = instructorData[instructorId];
    if (instructor) {
        document.getElementById('modalInstructorName').textContent = instructor.name;
        document.getElementById('modalInstructorTitle').textContent = instructor.title;
        document.getElementById('modalInstructorDescription').textContent = instructor.description;
        document.getElementById('modalEpisodes').textContent = instructor.episodes;
        document.getElementById('modalStudents').textContent = instructor.students;
        document.getElementById('modalRating').textContent = instructor.rating;
        
        const coursesList = document.getElementById('modalCoursesList');
        coursesList.innerHTML = '';
        instructor.courses.forEach(course => {
            const courseItem = document.createElement('div');
            courseItem.className = 'course-item-small';
            courseItem.innerHTML = `
                <i class="fas fa-play-circle"></i>
                <span>${course}</span>
            `;
            coursesList.appendChild(courseItem);
        });
        
        document.getElementById('instructorModal').style.display = 'block';
    }
}

function closeInstructorModal() {
    document.getElementById('instructorModal').style.display = 'none';
}

function contactInstructor(instructorId) {
    showNotification('Redirigiendo al formulario de contacto...', 'info');
    setTimeout(() => {
        window.location.href = 'ayuda.html#contacto';
    }, 1500);
}

function viewAllCourses() {
    window.location.href = 'index.html#cursos';
}

// Funciones de Mi Perfil
function showSection(sectionId) {
    // Ocultar todas las secciones
    document.querySelectorAll('.profile-section').forEach(section => {
        section.style.display = 'none';
    });
    
    // Remover clase active de todos los items del menú
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Mostrar la sección seleccionada
    document.getElementById(sectionId).style.display = 'block';
    
    // Añadir clase active al item del menú
    document.querySelector(`[onclick="showSection('${sectionId}')"]`).classList.add('active');
}

function showCourseTab(tabId) {
    // Ocultar todas las pestañas de cursos
    document.querySelectorAll('.course-tab').forEach(tab => {
        tab.style.display = 'none';
    });
    
    // Remover clase active de todos los botones
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Mostrar la pestaña seleccionada
    document.getElementById(tabId).style.display = 'block';
    
    // Añadir clase active al botón
    event.target.classList.add('active');
}

function editProfile() {
    showNotification('Redirigiendo a configuración...', 'info');
    setTimeout(() => {
        showSection('configuracion');
    }, 1000);
}

function shareProfile() {
    showNotification('Enlace de perfil copiado al portapapeles', 'success');
}

function continueCourse(courseId) {
    if (courseId === 'podcast') {
        window.open('curso-podcast.html', '_blank');
    } else {
        showNotification('Redirigiendo al curso...', 'info');
    }
}

function viewCourseDetails(courseId) {
    showNotification('Mostrando detalles del curso...', 'info');
}

function viewCertificate(courseId) {
    showNotification('Descargando certificado...', 'success');
}

function reviewCourse(courseId) {
    showNotification('Abriendo formulario de calificación...', 'info');
}

function enrollCourse(courseId) {
    showNotification('Inscribiéndote en el curso...', 'success');
}

function removeFromFavorites(courseId) {
    showNotification('Curso removido de favoritos', 'success');
}

function downloadCertificate(courseId) {
    showNotification('Descargando certificado...', 'success');
}

function shareCertificate(courseId) {
    showNotification('Compartiendo certificado...', 'info');
}

function saveSettings() {
    showNotification('Configuración guardada exitosamente', 'success');
}

function resetSettings() {
    showNotification('Configuración restablecida', 'info');
}

// Funciones de Ayuda
function showCategory(categoryId) {
    // Ocultar todas las categorías
    document.querySelectorAll('.help-category').forEach(category => {
        category.style.display = 'none';
    });
    
    // Remover clase active de todos los items
    document.querySelectorAll('.category-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Mostrar la categoría seleccionada
    document.getElementById(categoryId).style.display = 'block';
    
    // Añadir clase active al item
    event.target.classList.add('active');
}

function searchHelp() {
    const searchTerm = document.getElementById('helpSearch').value;
    if (searchTerm.trim()) {
        showNotification(`Buscando: "${searchTerm}"`, 'info');
        // Aquí se implementaría la búsqueda real
    }
}

function sendEmail() {
    showNotification('Abriendo cliente de email...', 'info');
}

function startChat() {
    showNotification('Iniciando chat en vivo...', 'info');
}

// Event listener para el formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification('Mensaje enviado exitosamente', 'success');
            contactForm.reset();
        });
    }
});

// Funciones de modal
function openClass(classNumber) {
    currentClass = classNumber;
    const classData = courseData[classNumber];
    
    document.getElementById('modalTitle').textContent = `Clase ${classNumber}: ${classData.title}`;
    document.getElementById('modalDescription').textContent = classData.description;
    
    // Actualizar recursos
    const resourcesList = document.querySelector('.resources-list');
    resourcesList.innerHTML = '';
    
    classData.resources.forEach(resource => {
        const resourceItem = document.createElement('div');
        resourceItem.className = 'resource-item';
        resourceItem.innerHTML = `
            <i class="fas fa-${getResourceIcon(resource.type)}"></i>
            <span>${resource.name}</span>
            <button class="btn-small" onclick="openResource('${resource.url}')">Ver</button>
        `;
        resourcesList.appendChild(resourceItem);
    });
    
    document.getElementById('classModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('classModal').style.display = 'none';
}

function getResourceIcon(type) {
    const icons = {
        'video': 'video',
        'pdf': 'file-pdf',
        'list': 'list',
        'template': 'file-alt',
        'practice': 'microphone',
        'project': 'download',
        'library': 'music',
        'guide': 'link'
    };
    return icons[type] || 'file';
}

function openResource(url) {
    if (url !== '#') {
        window.open(url, '_blank');
    } else {
        alert('Este recurso estará disponible próximamente');
    }
}

// Funciones de examen
function startExam() {
    currentQuestion = 0;
    userAnswers = [];
    examScore = 0;
    
    const classData = courseData[currentClass];
    document.getElementById('totalQuestions').textContent = classData.exam.questions.length;
    
    showQuestion();
    document.getElementById('examModal').style.display = 'block';
    document.getElementById('classModal').style.display = 'none';
}

function showQuestion() {
    const classData = courseData[currentClass];
    const question = classData.exam.questions[currentQuestion];
    
    document.getElementById('questionText').textContent = question.question;
    document.getElementById('currentQuestion').textContent = currentQuestion + 1;
    
    const answersContainer = document.getElementById('answersContainer');
    answersContainer.innerHTML = '';
    
    question.answers.forEach((answer, index) => {
        const answerOption = document.createElement('label');
        answerOption.className = 'answer-option';
        answerOption.innerHTML = `
            <input type="radio" name="answer" value="${index}">
            <span class="answer-text">${answer}</span>
        `;
        answersContainer.appendChild(answerOption);
    });
    
    // Actualizar barra de progreso
    const progress = ((currentQuestion + 1) / classData.exam.questions.length) * 100;
    document.getElementById('examProgress').style.width = progress + '%';
    
    // Actualizar botones
    document.getElementById('prevBtn').disabled = currentQuestion === 0;
    document.getElementById('nextBtn').style.display = currentQuestion < classData.exam.questions.length - 1 ? 'inline-flex' : 'none';
    document.getElementById('finishBtn').style.display = currentQuestion === classData.exam.questions.length - 1 ? 'inline-flex' : 'none';
}

function nextQuestion() {
    // Guardar respuesta actual
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        userAnswers[currentQuestion] = parseInt(selectedAnswer.value);
    } else {
        userAnswers[currentQuestion] = -1; // Sin respuesta
    }
    
    currentQuestion++;
    showQuestion();
}

function previousQuestion() {
    // Guardar respuesta actual
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        userAnswers[currentQuestion] = parseInt(selectedAnswer.value);
    } else {
        userAnswers[currentQuestion] = -1;
    }
    
    currentQuestion--;
    showQuestion();
    
    // Restaurar respuesta previa
    if (userAnswers[currentQuestion] !== -1) {
        const radioButtons = document.querySelectorAll('input[name="answer"]');
        radioButtons[userAnswers[currentQuestion]].checked = true;
    }
}

function finishExam() {
    // Guardar última respuesta
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        userAnswers[currentQuestion] = parseInt(selectedAnswer.value);
    } else {
        userAnswers[currentQuestion] = -1;
    }
    
    // Calcular puntuación
    const classData = courseData[currentClass];
    examScore = 0;
    
    classData.exam.questions.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            examScore++;
        }
    });
    
    // Mostrar resultados
    showResults();
}

function showResults() {
    const totalQuestions = courseData[currentClass].exam.questions.length;
    const percentage = Math.round((examScore / totalQuestions) * 100);
    
    document.getElementById('finalScore').textContent = examScore;
    
    let message, description;
    if (percentage >= 80) {
        message = "¡Excelente trabajo!";
        description = "Has dominado los conceptos de esta clase. ¡Continúa con la siguiente!";
    } else if (percentage >= 60) {
        message = "¡Buen trabajo!";
        description = "Has entendido la mayoría de los conceptos. Te recomendamos repasar algunos temas.";
    } else {
        message = "¡Sigue practicando!";
        description = "Te recomendamos revisar el material de la clase antes de continuar.";
    }
    
    document.getElementById('scoreMessage').textContent = message;
    document.getElementById('scoreDescription').textContent = description;
    
    document.getElementById('examModal').style.display = 'none';
    document.getElementById('resultsModal').style.display = 'block';
}

function closeExamModal() {
    document.getElementById('examModal').style.display = 'none';
}

function closeResultsModal() {
    document.getElementById('resultsModal').style.display = 'none';
}

function retakeExam() {
    document.getElementById('resultsModal').style.display = 'none';
    startExam();
}

// Funciones de interacción con las tarjetas
function unlockClass(classNumber) {
    const card = document.querySelector(`[data-class="${classNumber}"]`);
    const statusIcon = card.querySelector('.class-status i');
    
    statusIcon.className = 'fas fa-check-circle';
    statusIcon.style.color = '#4caf50';
    
    // Desbloquear la siguiente clase
    if (classNumber < 8) {
        const nextCard = document.querySelector(`[data-class="${classNumber + 1}"]`);
        const nextStatusIcon = nextCard.querySelector('.class-status i');
        nextStatusIcon.className = 'fas fa-unlock';
        nextStatusIcon.style.color = '#e91e63';
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Desbloquear primera clase
    unlockClass(1);
    
    // Filtros de cursos
    const filterTabs = document.querySelectorAll('.filter-tab');
    const courseCards = document.querySelectorAll('.course-card');
    
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remover clase active de todos los tabs
            filterTabs.forEach(t => t.classList.remove('active'));
            // Añadir clase active al tab clickeado
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            courseCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Cerrar modales al hacer clic fuera
    window.onclick = function(event) {
        const classModal = document.getElementById('classModal');
        const examModal = document.getElementById('examModal');
        const resultsModal = document.getElementById('resultsModal');
        const courseDetailModal = document.getElementById('courseDetailModal');
        
        if (event.target === classModal) {
            closeModal();
        }
        if (event.target === examModal) {
            closeExamModal();
        }
        if (event.target === resultsModal) {
            closeResultsModal();
        }
        if (event.target === courseDetailModal) {
            closeCourseModal();
        }
    }
    
    // Navegación suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Efectos de hover en las tarjetas
    document.querySelectorAll('.course-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Navegación entre clases
    document.querySelectorAll('.lesson-item').forEach(item => {
        item.addEventListener('click', function() {
            if (!this.classList.contains('locked')) {
                const lessonNumber = this.getAttribute('data-lesson');
                window.open(`clase-${lessonNumber}.html`, '_blank');
            }
        });
    });
});

// Función para simular progreso del curso
function completeClass(classNumber) {
    // Marcar clase como completada
    unlockClass(classNumber);
    
    // Simular desbloqueo de siguiente clase después de completar el examen
    setTimeout(() => {
        if (classNumber < 8) {
            unlockClass(classNumber + 1);
        }
    }, 2000);
}

// Función para mostrar notificaciones
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4caf50' : '#f44336'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// CSS para animaciones de notificaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);
