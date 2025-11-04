// Dữ liệu từ vựng IELTS
const vocabularyData = {
    topics: [
        {
            id: 'education',
            name: 'Education',
            icon: '🎓',
            description: 'Từ vựng về giáo dục, trường học, học thuật',
            color: '#4f46e5',
            words: [
                {
                    word: 'curriculum',
                    phonetic: '/kəˈrɪk.jə.ləm/',
                    definition: 'Chương trình giảng dạy',
                    vietnamese: 'Chương trình giảng dạy',
                    example: 'The school is updating its curriculum to include more technology courses.',
                    synonyms: ['syllabus', 'program of study', 'course of study'],
                    difficulty: 'medium',
                    topic: 'education',
                    type: 'noun'
                },
                {
                    word: 'scholarship',
                    phonetic: '/ˈskɒl.ə.ʃɪp/',
                    definition: 'Financial aid for education',
                    vietnamese: 'Học bổng',
                    example: 'She received a scholarship to study at Harvard University.',
                    synonyms: ['grant', 'bursary', 'fellowship'],
                    difficulty: 'easy',
                    topic: 'education',
                    type: 'noun'
                },
                {
                    word: 'literacy',
                    phonetic: '/ˈlɪt.ər.ə.si/',
                    definition: 'Ability to read and write',
                    vietnamese: 'Khả năng đọc viết',
                    example: 'Digital literacy is essential in the modern workplace.',
                    synonyms: ['reading ability', 'writing ability', 'education'],
                    difficulty: 'medium',
                    topic: 'education',
                    type: 'noun'
                },
                {
                    word: 'pedagogy',
                    phonetic: '/ˈped.ə.ɡɒdʒ.i/',
                    definition: 'The method and practice of teaching',
                    vietnamese: 'Phương pháp giảng dạy',
                    example: 'Modern pedagogy emphasizes student-centered learning.',
                    synonyms: ['teaching method', 'instruction', 'educational approach'],
                    difficulty: 'hard',
                    topic: 'education',
                    type: 'noun'
                }
            ]
        },
        {
            id: 'environment',
            name: 'Environment',
            icon: '🌍',
            description: 'Từ vựng về môi trường, sinh thái, bảo tồn',
            color: '#10b981',
            words: [
                {
                    word: 'sustainability',
                    phonetic: '/səˌsteɪ.nəˈbɪl.ə.ti/',
                    definition: 'Avoidance of depletion of natural resources',
                    vietnamese: 'Tính bền vững',
                    example: 'Companies are focusing on sustainability to protect the environment.',
                    synonyms: ['endurance', 'maintainability', 'ecological balance'],
                    difficulty: 'hard',
                    topic: 'environment',
                    type: 'noun'
                },
                {
                    word: 'biodiversity',
                    phonetic: '/ˌbaɪ.əʊ.daɪˈvɜː.sə.ti/',
                    definition: 'Variety of plant and animal life',
                    vietnamese: 'Đa dạng sinh học',
                    example: 'The rainforest has incredible biodiversity with thousands of species.',
                    synonyms: ['biological diversity', 'ecological variety'],
                    difficulty: 'hard',
                    topic: 'environment',
                    type: 'noun'
                },
                {
                    word: 'renewable',
                    phonetic: '/rɪˈnjuː.ə.bəl/',
                    definition: 'Capable of being renewed',
                    vietnamese: 'Có thể tái tạo',
                    example: 'Solar and wind are renewable energy sources.',
                    synonyms: ['sustainable', 'replenishable'],
                    difficulty: 'medium',
                    topic: 'environment',
                    type: 'adjective'
                },
                {
                    word: 'deforestation',
                    phonetic: '/ˌdiː.fɒr.ɪˈsteɪ.ʃən/',
                    definition: 'Clearing of forests',
                    vietnamese: 'Phá rừng',
                    example: 'Deforestation contributes to climate change and loss of biodiversity.',
                    synonyms: ['forest clearance', 'clearcutting'],
                    difficulty: 'medium',
                    topic: 'environment',
                    type: 'noun'
                }
            ]
        },
        {
            id: 'technology',
            name: 'Technology',
            icon: '💻',
            description: 'Từ vựng về công nghệ, kỹ thuật số, đổi mới',
            color: '#f59e0b',
            words: [
                {
                    word: 'innovation',
                    phonetic: '/ˌɪn.əˈveɪ.ʃən/',
                    definition: 'Introduction of new ideas or methods',
                    vietnamese: 'Sự đổi mới, sáng tạo',
                    example: 'Technological innovation has changed how we communicate.',
                    synonyms: ['invention', 'creativity', 'novelty'],
                    difficulty: 'medium',
                    topic: 'technology',
                    type: 'noun'
                },
                {
                    word: 'automation',
                    phonetic: '/ˌɔː.təˈmeɪ.ʃən/',
                    definition: 'Use of automatic equipment in manufacturing',
                    vietnamese: 'Tự động hóa',
                    example: 'Factory automation has increased production efficiency.',
                    synonyms: ['mechanization', 'computerization'],
                    difficulty: 'medium',
                    topic: 'technology',
                    type: 'noun'
                },
                {
                    word: 'artificial intelligence',
                    phonetic: '/ˌɑː.tɪ.fɪʃ.əl ɪnˈtel.ɪ.dʒəns/',
                    definition: 'Simulation of human intelligence by machines',
                    vietnamese: 'Trí tuệ nhân tạo',
                    example: 'Artificial intelligence is transforming many industries.',
                    synonyms: ['AI', 'machine learning', 'cognitive computing'],
                    difficulty: 'medium',
                    topic: 'technology',
                    type: 'noun'
                }
            ]
        },
        {
            id: 'health',
            name: 'Health',
            icon: '🏥',
            description: 'Từ vựng về sức khỏe, y tế, thể chất',
            color: '#ef4444',
            words: [
                {
                    word: 'wellness',
                    phonetic: '/ˈwel.nəs/',
                    definition: 'The state of being in good health',
                    vietnamese: 'Tình trạng sức khỏe tốt',
                    example: 'Many companies now offer wellness programs for employees.',
                    synonyms: ['health', 'fitness', 'well-being'],
                    difficulty: 'easy',
                    topic: 'health',
                    type: 'noun'
                },
                {
                    word: 'epidemic',
                    phonetic: '/ˌep.ɪˈdem.ɪk/',
                    definition: 'Widespread occurrence of an infectious disease',
                    vietnamese: 'Dịch bệnh',
                    example: 'The government took measures to control the epidemic.',
                    synonyms: ['outbreak', 'plague', 'pandemic'],
                    difficulty: 'medium',
                    topic: 'health',
                    type: 'noun'
                }
            ]
        }
    ]
};

// User Data Management
class UserDataManager {
    constructor() {
        this.userData = {
            lessons: [],
            writingTemplates: [],
            speakingNotes: [],
            savedWords: [],
            progress: {
                wordsLearned: 0,
                accuracyRate: 0,
                learningStreak: 0,
                difficultWords: [],
                lastStudyDate: null,
                quizScores: []
            }
        };
        this.loadUserData();
    }

    // Load dữ liệu user từ localStorage
    loadUserData() {
        const savedData = localStorage.getItem('ieltsUserData');
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            this.userData = { 
                ...this.userData, 
                ...parsedData,
                progress: {
                    ...this.userData.progress,
                    ...parsedData.progress
                }
            };
        }
    }

    // Save dữ liệu user
    saveUserData() {
        localStorage.setItem('ieltsUserData', JSON.stringify(this.userData));
    }

    // Thêm bài học mới
    addLesson(lesson) {
        const newLesson = {
            id: Date.now().toString(),
            title: lesson.title,
            type: lesson.type,
            content: lesson.content,
            wordCount: this.countWords(lesson.content),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        
        this.userData.lessons.unshift(newLesson);
        this.saveUserData();
        return newLesson;
    }

    // Thêm writing template
    addWritingTemplate(template) {
        const newTemplate = {
            id: Date.now().toString(),
            type: template.type,
            structure: template.structure,
            example: template.example,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        
        this.userData.writingTemplates.unshift(newTemplate);
        this.saveUserData();
        return newTemplate;
    }

    // Thêm speaking note
    addSpeakingNote(note) {
        const newNote = {
            id: Date.now().toString(),
            part: note.part,
            topic: note.topic,
            content: note.content,
            wordCount: this.countWords(note.content),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        
        this.userData.speakingNotes.unshift(newNote);
        this.saveUserData();
        return newNote;
    }

    // Lưu từ vựng
    saveWord(word) {
        if (!this.userData.savedWords.find(w => w.word === word.word)) {
            const wordToSave = {
                ...word,
                savedAt: new Date().toISOString(),
                id: Date.now().toString(),
                reviewCount: 0,
                lastReviewed: null
            };
            this.userData.savedWords.unshift(wordToSave);
            this.saveUserData();
            return true;
        }
        return false;
    }

    // Thêm từ khó
    addDifficultWord(word) {
        if (!this.userData.progress.difficultWords.find(w => w.word === word.word)) {
            this.userData.progress.difficultWords.push({
                ...word,
                addedAt: new Date().toISOString(),
                id: Date.now().toString()
            });
            this.saveUserData();
            return true;
        }
        return false;
    }

    // Cập nhật tiến độ
    updateProgress(wordsStudied = 1) {
        const today = new Date().toDateString();
        const lastDate = this.userData.progress.lastStudyDate;
        
        // Cập nhật chuỗi ngày học
        if (lastDate !== today) {
            if (lastDate && this.isYesterday(lastDate, today)) {
                this.userData.progress.learningStreak++;
            } else {
                this.userData.progress.learningStreak = 1;
            }
            this.userData.progress.lastStudyDate = today;
        }
        
        // Cập nhật số từ đã học
        this.userData.progress.wordsLearned += wordsStudied;
        this.saveUserData();
    }

    // Thêm điểm quiz
    addQuizScore(score, total, topic) {
        this.userData.progress.quizScores.unshift({
            score,
            total,
            topic,
            percentage: (score / total) * 100,
            date: new Date().toISOString()
        });
        
        // Giữ chỉ 10 kết quả gần nhất
        this.userData.progress.quizScores = this.userData.progress.quizScores.slice(0, 10);
        
        // Cập nhật độ chính xác trung bình
        this.updateAccuracyRate();
        this.saveUserData();
    }

    // Cập nhật độ chính xác
    updateAccuracyRate() {
        const scores = this.userData.progress.quizScores;
        if (scores.length > 0) {
            const totalPercentage = scores.reduce((sum, score) => sum + score.percentage, 0);
            this.userData.progress.accuracyRate = totalPercentage / scores.length;
        }
    }

    // Helper methods
    isYesterday(date1, date2) {
        const yesterday = new Date(date2);
        yesterday.setDate(yesterday.getDate() - 1);
        return new Date(date1).toDateString() === yesterday.toDateString();
    }

    countWords(text) {
        if (!text) return 0;
        return text.trim() ? text.trim().split(/\s+/).length : 0;
    }

    // Xóa bài học
    deleteLesson(lessonId) {
        this.userData.lessons = this.userData.lessons.filter(lesson => lesson.id !== lessonId);
        this.saveUserData();
    }

    // Xóa template
    deleteTemplate(templateId) {
        this.userData.writingTemplates = this.userData.writingTemplates.filter(template => template.id !== templateId);
        this.saveUserData();
    }

    // Xóa speaking note
    deleteSpeakingNote(noteId) {
        this.userData.speakingNotes = this.userData.speakingNotes.filter(note => note.id !== noteId);
        this.saveUserData();
    }

    // Xóa từ khó
    removeDifficultWord(wordId) {
        this.userData.progress.difficultWords = this.userData.progress.difficultWords.filter(word => word.id !== wordId);
        this.saveUserData();
    }

    // Cập nhật bài học
    updateLesson(lessonId, updates) {
        const lessonIndex = this.userData.lessons.findIndex(lesson => lesson.id === lessonId);
        if (lessonIndex !== -1) {
            this.userData.lessons[lessonIndex] = {
                ...this.userData.lessons[lessonIndex],
                ...updates,
                updatedAt: new Date().toISOString(),
                wordCount: updates.content ? this.countWords(updates.content) : this.userData.lessons[lessonIndex].wordCount
            };
            this.saveUserData();
            return true;
        }
        return false;
    }

    // Cập nhật template
    updateTemplate(templateId, updates) {
        const templateIndex = this.userData.writingTemplates.findIndex(template => template.id === templateId);
        if (templateIndex !== -1) {
            this.userData.writingTemplates[templateIndex] = {
                ...this.userData.writingTemplates[templateIndex],
                ...updates,
                updatedAt: new Date().toISOString()
            };
            this.saveUserData();
            return true;
        }
        return false;
    }

    // Cập nhật speaking note
    updateSpeakingNote(noteId, updates) {
        const noteIndex = this.userData.speakingNotes.findIndex(note => note.id === noteId);
        if (noteIndex !== -1) {
            this.userData.speakingNotes[noteIndex] = {
                ...this.userData.speakingNotes[noteIndex],
                ...updates,
                updatedAt: new Date().toISOString(),
                wordCount: updates.content ? this.countWords(updates.content) : this.userData.speakingNotes[noteIndex].wordCount
            };
            this.saveUserData();
            return true;
        }
        return false;
    }
}

// State management
let appState = {
    currentSection: 'home',
    currentTopic: null,
    currentWords: [],
    currentCardIndex: 0,
    quizState: {
        currentTopic: null,
        currentQuestion: 0,
        score: 0,
        selectedOption: null,
        questions: [],
        isActive: false,
        quizType: 'multiple-choice'
    }
};

// Khởi tạo User Data Manager
const userDataManager = new UserDataManager();

// DOM Elements
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');
const topicsContainer = document.getElementById('topicsContainer');
const topicSelect = document.getElementById('topicSelect');
const quizTopicSelect = document.getElementById('quizTopicSelect');
const startLearningBtn = document.getElementById('startLearning');
const startQuizBtn = document.getElementById('startQuiz');
const flashcard = document.getElementById('flashcard');
const prevCardBtn = document.getElementById('prevCard');
const nextCardBtn = document.getElementById('nextCard');
const flipCardBtn = document.getElementById('flipCard');
const currentCardSpan = document.getElementById('currentCard');
const totalCardsSpan = document.getElementById('totalCards');
const progressFill = document.getElementById('progressFill');
const checkAnswerBtn = document.getElementById('checkAnswer');
const nextQuestionBtn = document.getElementById('nextQuestion');
const quizContainer = document.getElementById('quizContainer');
const quizQuestionEl = document.getElementById('quizQuestion'); // Đã đổi tên từ quizQuestion để tránh xung đột
const quizOptions = document.getElementById('quizOptions');
const quizFeedback = document.getElementById('quizFeedback');
const quizWelcome = document.getElementById('quizWelcome');
const quizActive = document.getElementById('quizActive');
const quizActions = document.getElementById('quizActions');
const questionText = document.getElementById('questionText'); // Đã thêm

// My Lessons DOM Elements
const saveLessonBtn = document.getElementById('saveLesson');
const saveTemplateBtn = document.getElementById('saveTemplate');
const saveSpeakingNoteBtn = document.getElementById('saveSpeakingNote');
const lessonsGrid = document.getElementById('lessonsGrid');
const templatesList = document.getElementById('templatesList');
const speakingNotesList = document.getElementById('speakingNotesList');

// Progress DOM Elements
const wordsLearnedEl = document.getElementById('wordsLearned');
const accuracyRateEl = document.getElementById('accuracyRate');
const learningStreakEl = document.getElementById('learningStreak');
const lessonsCreatedEl = document.getElementById('lessonsCreated');
const difficultWordsList = document.getElementById('difficultWordsList');
const recentLessonsList = document.getElementById('recentLessonsList');

// Edit Modal DOM Elements
const editModal = document.getElementById('editModal');
const editLessonId = document.getElementById('editLessonId');
const editLessonTitle = document.getElementById('editLessonTitle');
const editLessonType = document.getElementById('editLessonType');
const editLessonContent = document.getElementById('editLessonContent');
const editLessonContentWordCount = document.getElementById('editLessonContentWordCount');

const editTemplateModal = document.getElementById('editTemplateModal');
const editTemplateId = document.getElementById('editTemplateId');
const editTemplateType = document.getElementById('editTemplateType');
const editTemplateStructure = document.getElementById('editTemplateStructure');
const editTemplateExample = document.getElementById('editTemplateExample');

const editSpeakingModal = document.getElementById('editSpeakingModal');
const editSpeakingId = document.getElementById('editSpeakingId');
const editSpeakingPart = document.getElementById('editSpeakingPart');
const editSpeakingTopic = document.getElementById('editSpeakingTopic');
const editSpeakingContent = document.getElementById('editSpeakingContent');


// Khởi tạo ứng dụng
function initApp() {
    loadTopics();
    setupEventListeners();
    initUserLessons();
    updateProgressDisplay();
    updateLearningStreak();
    
    // Hiển thị section home mặc định
    showSection('home');
}

// Tải danh sách chủ đề
function loadTopics() {
    topicsContainer.innerHTML = '';
    topicSelect.innerHTML = '<option value="">-- Chọn chủ đề --</option>';
    quizTopicSelect.innerHTML = '<option value="">-- Chọn chủ đề --</option>';
    
    vocabularyData.topics.forEach(topic => {
        // Thêm vào grid topics
        const topicCard = document.createElement('div');
        topicCard.className = 'topic-card';
        topicCard.style.cursor = 'pointer';
        topicCard.innerHTML = `
            <div style="font-size: 2.5rem; margin-bottom: 1rem;">${topic.icon}</div>
            <h4>${topic.name}</h4>
            <small>${topic.words.length} từ</small>
            <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 0.5rem;">${topic.description}</p>
        `;
        topicCard.addEventListener('click', () => {
            // Đặt giá trị cho dropdown và bắt đầu học
            topicSelect.value = topic.id;
            startTopic(topic.id);
        });
        topicsContainer.appendChild(topicCard);

        // Thêm vào dropdown select
        [topicSelect, quizTopicSelect].forEach(select => {
            const option = document.createElement('option');
            option.value = topic.id;
            option.textContent = `${topic.icon} ${topic.name} (${topic.words.length} từ)`;
            select.appendChild(option);
        });
    });
}

// Bắt đầu học chủ đề
function startTopic(topicId) {
    const topic = vocabularyData.topics.find(t => t.id === topicId);
    if (!topic) return;

    appState.currentTopic = topic;
    // Lọc các từ có ví dụ
    appState.currentWords = [...topic.words].filter(w => w.example);
    appState.currentCardIndex = 0;
    
    if (appState.currentWords.length === 0) {
        showNotification('Chủ đề này chưa có từ vựng hoặc từ vựng thiếu ví dụ.', 'error');
        return;
    }

    showSection('flashcards');
    updateFlashcard();
    updateCardCounter();
    updateProgressBar();
}

// Cập nhật flashcard
function updateFlashcard() {
    if (appState.currentWords.length === 0) {
        document.getElementById('word').textContent = 'Không có từ vựng';
        document.getElementById('phonetic').textContent = '';
        document.getElementById('definition').textContent = 'Vui lòng chọn chủ đề khác';
        document.getElementById('example').textContent = '';
        document.getElementById('synonyms').textContent = '';
        return;
    }

    const currentWord = appState.currentWords[appState.currentCardIndex];
    
    document.getElementById('word').textContent = currentWord.word;
    document.getElementById('phonetic').textContent = currentWord.phonetic;
    document.getElementById('definition').textContent = currentWord.definition;
    document.getElementById('example').textContent = currentWord.example;
    document.getElementById('synonyms').textContent = `Synonyms: ${currentWord.synonyms.join(', ')}`;

    // Reset flashcard về mặt trước
    flashcard.classList.remove('flipped');
    
    // Reset nút đánh dấu từ khó
    const markBtn = document.querySelector('.btn-mark-difficult');
    const isDifficult = userDataManager.userData.progress.difficultWords.find(w => w.word === currentWord.word);
    if (isDifficult) {
        markBtn.innerHTML = '<i class="fas fa-star"></i> Đã đánh dấu';
        markBtn.style.background = '#dc2626';
    } else {
        markBtn.innerHTML = '<i class="fas fa-star"></i> Đánh dấu khó';
        markBtn.style.background = '#f59e0b';
    }
}

// Cập nhật bộ đếm thẻ
function updateCardCounter() {
    currentCardSpan.textContent = appState.currentWords.length > 0 ? appState.currentCardIndex + 1 : 0;
    totalCardsSpan.textContent = appState.currentWords.length;
}

// Cập nhật progress bar
function updateProgressBar() {
    if (appState.currentWords.length === 0) {
        progressFill.style.width = '0%';
        return;
    }
    
    const progress = ((appState.currentCardIndex + 1) / appState.currentWords.length) * 100;
    progressFill.style.width = `${progress}%`;
}

// Chuyển section
function showSection(sectionId) {
    sections.forEach(section => {
        section.classList.remove('active');
        if (section.id === sectionId) {
            section.classList.add('active');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });

    appState.currentSection = sectionId;

    // Cập nhật dữ liệu khi chuyển section
    if (sectionId === 'progress') {
        updateProgressDisplay();
    } else if (sectionId === 'my-lessons') {
        loadUserLessons();
        loadWritingTemplates();
        loadSpeakingNotes();
    } else if (sectionId === 'quiz') {
        resetQuiz();
    }
}

// Text-to-Speech
function speakCurrentWord() {
    if (appState.currentWords.length === 0) return;
    const currentWord = appState.currentWords[appState.currentCardIndex];
    if (currentWord && 'speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(currentWord.word);
        utterance.lang = 'en-US';
        utterance.rate = 0.8;
        utterance.pitch = 1;
        utterance.volume = 1;
        speechSynthesis.speak(utterance);
    }
}

// Lưu từ hiện tại
function saveCurrentWord() {
    if (appState.currentWords.length === 0) return;
    const currentWord = appState.currentWords[appState.currentCardIndex];
    if (currentWord) {
        const saved = userDataManager.saveWord(currentWord);
        if (saved) {
            showNotification('✅ Từ đã được lưu!', 'success');
        } else {
            showNotification('ℹ️ Từ này đã được lưu trước đó.', 'info');
        }
    }
}

// Đánh dấu từ khó (hàm này sẽ ghi đè hàm inline trong HTML)
function markCurrentWordDifficult() {
    if (appState.currentWords.length === 0) return;
    const currentWord = appState.currentWords[appState.currentCardIndex];
    if (currentWord) {
        const added = userDataManager.addDifficultWord(currentWord);
        if (added) {
            const btn = document.querySelector('.btn-mark-difficult');
            btn.innerHTML = '<i class="fas fa-star"></i> Đã đánh dấu';
            btn.style.background = '#dc2626';
            showNotification('✅ Đã thêm vào từ khó cần ôn tập', 'success');
        } else {
            showNotification('ℹ️ Từ này đã được đánh dấu trước đó.', 'info');
        }
    }
}

// Hiển thị thông báo
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.position = 'fixed';
    notification.style.top = '100px';
    notification.style.right = '20px';
    notification.style.padding = '1rem 1.5rem';
    notification.style.borderRadius = 'var(--border-radius-lg)';
    notification.style.color = 'white';
    notification.style.fontWeight = '500';
    notification.style.zIndex = '3000';
    notification.style.animation = 'slideInRight 0.3s ease-out';
    notification.style.maxWidth = '300px';
    notification.style.boxShadow = 'var(--shadow-lg)';
    notification.style.display = 'flex';
    notification.style.alignItems = 'center';
    notification.style.gap = '0.5rem';
    notification.textContent = message;
    
    if (type === 'success') {
        notification.style.background = 'var(--success-color, #10b981)';
    } else if (type === 'error') {
        notification.style.background = 'var(--error-color, #ef4444)';
    } else {
        notification.style.background = 'var(--info-color, #06b6d4)';
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-in forwards';
        notification.addEventListener('animationend', () => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        });
    }, 3000);
}

// Thiết lập event listeners
function setupEventListeners() {
    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href').substring(1);
            showSection(sectionId);
        });
    });

    // Flashcard controls
    startLearningBtn.addEventListener('click', () => {
        const selectedTopic = topicSelect.value;
        if (selectedTopic) {
            startTopic(selectedTopic);
        } else {
            showNotification('Vui lòng chọn chủ đề!', 'error');
        }
    });

    flipCardBtn.addEventListener('click', () => {
        if (appState.currentWords.length > 0) {
            flashcard.classList.toggle('flipped');
        }
    });

    prevCardBtn.addEventListener('click', () => {
        if (appState.currentCardIndex > 0) {
            appState.currentCardIndex--;
            updateFlashcard();
            updateCardCounter();
            updateProgressBar();
        }
    });

    nextCardBtn.addEventListener('click', () => {
        if (appState.currentWords.length === 0) return;
        if (appState.currentCardIndex < appState.currentWords.length - 1) {
            appState.currentCardIndex++;
            updateFlashcard();
            updateCardCounter();
            updateProgressBar();
            
            // Cập nhật tiến độ học
            userDataManager.updateProgress(1);
        } else {
            showNotification('🎉 Bạn đã hoàn thành chủ đề này!', 'success');
            // Cập nhật tiến độ cho từ cuối cùng
            userDataManager.updateProgress(1);
        }
    });

    // Flashcard click to flip
    flashcardContainer.addEventListener('click', (e) => {
        // Chỉ lật thẻ nếu không click vào nút
        if (e.target.closest('button')) return;
        if (appState.currentWords.length > 0) {
            flashcard.classList.toggle('flipped');
        }
    });

    // Quiz controls
    startQuizBtn.addEventListener('click', startQuiz);
    checkAnswerBtn.addEventListener('click', checkAnswer);
    nextQuestionBtn.addEventListener('click', nextQuestion);
}

// ==================== QUIZ FUNCTIONS ====================
function startQuiz() {
    const selectedTopic = quizTopicSelect.value;
    const quizType = document.getElementById('quizType').value;
    
    if (!selectedTopic) {
        showNotification('Vui lòng chọn chủ đề kiểm tra!', 'error');
        return;
    }

    const topic = vocabularyData.topics.find(t => t.id === selectedTopic);
    
    // Lọc các từ có ví dụ (cần cho 'fill-blank')
    const wordsWithExamples = topic.words.filter(w => w.example && w.example.trim() !== '');

    if (!topic || wordsWithExamples.length === 0) {
        showNotification('Chủ đề này chưa có từ vựng hoặc từ vựng thiếu ví dụ!', 'error');
        return;
    }

    // Khởi tạo quiz state
    appState.quizState = {
        currentTopic: topic,
        currentQuestion: 0,
        score: 0,
        selectedOption: null,
        isActive: true,
        quizType: quizType,
        questions: generateQuizQuestions(topic, quizType, wordsWithExamples)
    };
    
    if (appState.quizState.questions.length === 0) {
        showNotification(`Không thể tạo bài tập "${quizType}" cho chủ đề này.`, 'error');
        return;
    }

    // Hiển thị giao diện quiz
    quizWelcome.style.display = 'none';
    quizActive.style.display = 'block';
    quizActions.style.display = 'flex';
    checkAnswerBtn.style.display = 'block';
    nextQuestionBtn.style.display = 'none';

    // Hiển thị câu hỏi đầu tiên
    showQuizQuestion();
}

function generateQuizQuestions(topic, quizType, wordsWithExamples) {
    let questions = [];
    let words = [...topic.words]; // Dùng cho trắc nghiệm
    let wordsForBlank = [...wordsWithExamples]; // Dùng cho điền từ

    // Giới hạn 10 câu hỏi hoặc tối đa số từ
    let numQuestions = Math.min(10, quizType === 'fill-blank' ? wordsForBlank.length : words.length);
    if (numQuestions < 4 && quizType === 'multiple-choice') {
        // Cần ít nhất 4 từ để tạo câu trắc nghiệm
        return [];
    }
    
    words = shuffleArray(words);
    wordsForBlank = shuffleArray(wordsForBlank);

    for (let i = 0; i < numQuestions; i++) {
        let question;

        if (quizType === 'multiple-choice') {
            const word = words[i];
            question = {
                type: 'multiple-choice',
                word: word.word,
                correctAnswer: word.definition,
                options: generateOptions(word.definition, words) // Dùng tất cả từ đã xáo trộn
            };
        } else if (quizType === 'fill-blank') {
            const word = wordsForBlank[i];
            question = {
                type: 'fill-blank',
                word: word.word,
                sentence: generateFillBlankSentence(word),
                correctAnswer: word.word
            };
        }
        // Bỏ qua 'matching' vì HTML không có UI hỗ trợ
        
        if (question) {
            questions.push(question);
        }
    }

    return questions;
}

function generateOptions(correctAnswer, allWords) {
    const options = [correctAnswer];
    // Lấy các định nghĩa khác
    const otherWords = allWords.filter(word => word.definition !== correctAnswer);
    
    // Lấy ngẫu nhiên 3 định nghĩa khác
    for (let i = 0; i < 3; i++) {
        if (otherWords.length > 0) {
            const randomIndex = Math.floor(Math.random() * otherWords.length);
            options.push(otherWords[randomIndex].definition);
            otherWords.splice(randomIndex, 1);
        }
    }
    
    // Xáo trộn các lựa chọn
    return shuffleArray(options);
}

/**
 * SỬA LỖI: Hàm này đã được sửa để sử dụng câu ví dụ.
 */
function generateFillBlankSentence(word) {
    // Tạo một biểu thức chính quy để tìm từ, không phân biệt hoa thường (i) và tìm tất cả (g)
    const regex = new RegExp(word.word, 'ig');
    return word.example.replace(regex, '__________');
}

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function showQuizQuestion() {
    const quizState = appState.quizState;
    const currentQuestion = quizState.questions[quizState.currentQuestion];
    
    if (!currentQuestion) return;

    quizOptions.innerHTML = '';
    quizFeedback.innerHTML = '';
    quizFeedback.style.display = 'none';
    quizActions.style.display = 'flex';
    checkAnswerBtn.style.display = 'block';
    nextQuestionBtn.style.display = 'none';
    
    let progressText = `Câu ${quizState.currentQuestion + 1} / ${quizState.questions.length}`;

    // Hiển thị câu hỏi
    if (currentQuestion.type === 'multiple-choice') {
        questionText.innerHTML = `"${currentQuestion.word}" có nghĩa là gì? <br><small>${progressText}</small>`;
        
        // Hiển thị các lựa chọn
        currentQuestion.options.forEach((option, index) => {
            const optionEl = document.createElement('div');
            optionEl.className = 'quiz-option';
            optionEl.innerHTML = `
                <input type="radio" name="quiz-option" id="option-${index}" value="${option}" style="display: none;">
                <label for="option-${index}">${option}</label>
            `;
            // Bọc label trong div để click
            optionEl.addEventListener('click', () => {
                // Tự động chọn radio
                optionEl.querySelector('input[type="radio"]').checked = true;
                selectOption(option, optionEl);
            });
            quizOptions.appendChild(optionEl);
        });
        
    } else if (currentQuestion.type === 'fill-blank') {
        questionText.innerHTML = `Điền từ còn thiếu: <br><i>"${currentQuestion.sentence}"</i> <br><small>${progressText}</small>`;
        
        // Hiển thị ô điền từ
        const inputEl = document.createElement('input');
        inputEl.type = 'text';
        inputEl.id = 'fillBlankAnswer';
        inputEl.placeholder = 'Nhập đáp án...';
        inputEl.className = 'form-input'; // Sử dụng class từ style.css
        inputEl.style.marginTop = '1rem';
        inputEl.style.background = 'white'; // Đảm bảo input có nền trắng
        
        quizOptions.appendChild(inputEl);
        
        // Cho phép nhấn Enter để kiểm tra
        inputEl.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault(); // Ngăn form submit (nếu có)
                checkAnswer();
            }
        });
    }
}

function selectOption(option, optionEl) {
    // Bỏ chọn tất cả các options khác
    document.querySelectorAll('.quiz-option').forEach(el => {
        el.classList.remove('selected');
    });
    
    // Chọn option hiện tại
    optionEl.classList.add('selected');
    appState.quizState.selectedOption = option;
}

function checkAnswer() {
    if (quizFeedback.style.display === 'block') return; // Đã kiểm tra
    
    const quizState = appState.quizState;
    const currentQuestion = quizState.questions[quizState.currentQuestion];
    let userAnswer, isCorrect;

    if (currentQuestion.type === 'multiple-choice') {
        userAnswer = quizState.selectedOption;
        if (!userAnswer) {
            showNotification('Vui lòng chọn một đáp án!', 'error');
            return;
        }
        isCorrect = userAnswer === currentQuestion.correctAnswer;
    } else if (currentQuestion.type === 'fill-blank') {
        userAnswer = document.getElementById('fillBlankAnswer').value.trim();
        if (!userAnswer) {
            showNotification('Vui lòng nhập đáp án!', 'error');
            return;
        }
        isCorrect = userAnswer.toLowerCase() === currentQuestion.correctAnswer.toLowerCase();
    }

    // Hiển thị phản hồi
    quizFeedback.style.display = 'block';
    if (isCorrect) {
        quizState.score++;
        quizFeedback.innerHTML = `
            <div class="feedback correct" style="background: #d1fae5; color: #065f46; border: 1px solid #a7f3d0; padding: 1rem; border-radius: var(--border-radius-lg); text-align: center;">
                <i class="fas fa-check-circle"></i>
                <span> <strong>Chính xác!</strong> 🎉</span>
            </div>
        `;
    } else {
        quizFeedback.innerHTML = `
            <div class="feedback incorrect" style="background: #fee2e2; color: #991b1b; border: 1px solid #fca5a5; padding: 1rem; border-radius: var(--border-radius-lg); text-align: center;">
                <i class="fas fa-times-circle"></i>
                <span> <strong>Sai rồi!</strong> 😔</span>
                <p style="margin-top: 0.5rem;">Đáp án đúng: <strong>${currentQuestion.correctAnswer}</strong></p>
            </div>
        `;
    }

    // Cập nhật nút
    checkAnswerBtn.style.display = 'none';
    nextQuestionBtn.style.display = 'block';
}

function nextQuestion() {
    const quizState = appState.quizState;
    quizState.currentQuestion++;

    if (quizState.currentQuestion < quizState.questions.length) {
        showQuizQuestion();
    } else {
        finishQuiz();
    }
}

/**
 * SỬA LỖI: Hàm này đã được sửa để hiển thị kết quả trong #quizActive
 */
function finishQuiz() {
    const quizState = appState.quizState;
    
    // Lưu kết quả
    userDataManager.addQuizScore(quizState.score, quizState.questions.length, quizState.currentTopic.name);
    
    // Hiển thị kết quả
    quizActive.style.display = 'block';
    quizFeedback.style.display = 'none';
    quizOptions.innerHTML = '';
    
    const percentage = Math.round((quizState.score / quizState.questions.length) * 100);
    
    let message = '';
    if (percentage >= 90) message = 'Xuất sắc! 🎉';
    else if (percentage >= 70) message = 'Rất tốt! 👍';
    else if (percentage >= 50) message = 'Khá tốt! 💪';
    else message = 'Cần cố gắng thêm! 📚';

    questionText.innerHTML = `Hoàn thành bài kiểm tra!`;
    quizOptions.innerHTML = `
        <div style="text-align: center; padding: 2rem 0;">
            <h3 style="font-size: 1.8rem; margin-bottom: 1rem;">Kết quả của bạn</h3>
            <div style="font-size: 3rem; font-weight: bold; color: var(--primary-color); margin-bottom: 1rem;">
                ${quizState.score} / ${quizState.questions.length}
            </div>
            <div style="font-size: 1.5rem; color: var(--text-secondary); margin-bottom: 2rem;">
                (${percentage}%) - ${message}
            </div>
        </div>
    `;
    
    // Cập nhật nút
    quizActions.innerHTML = `
        <button id="quizAgainBtn" class="btn btn-primary">
            <i class="fas fa-redo"></i> Làm lại
        </button>
        <button id="quizHomeBtn" class="btn btn-secondary">
            <i class="fas fa-home"></i> Về trang chủ
        </button>
    `;
    
    document.getElementById('quizAgainBtn').addEventListener('click', resetQuiz);
    document.getElementById('quizHomeBtn').addEventListener('click', () => showSection('home'));
    
    // Cập nhật progress display
    updateProgressDisplay();
}

/**
 * SỬA LỖI: Hàm này đã được sửa để reset về trạng thái ban đầu
 */
function resetQuiz() {
    appState.quizState = {
        currentTopic: null,
        currentQuestion: 0,
        score: 0,
        selectedOption: null,
        questions: [],
        isActive: false,
        quizType: 'multiple-choice'
    };
    
    quizWelcome.style.display = 'block';
    quizActive.style.display = 'none';
    quizActions.style.display = 'flex'; // Hiển thị lại khu vực control
    
    // Đặt lại các nút ban đầu
    quizActions.innerHTML = `
        <button id="checkAnswer" class="btn btn-primary" style="display: none;">
            <i class="fas fa-check"></i> Kiểm tra đáp án
        </button>
        <button id="nextQuestion" class="btn btn-secondary" style="display: none;">
            <i class="fas fa-arrow-right"></i> Câu tiếp theo
        </button>
    `;
    // Gán lại DOM elements cho các nút vừa tạo
    window.checkAnswerBtn = document.getElementById('checkAnswer');
    window.nextQuestionBtn = document.getElementById('nextQuestion');
    // Gán lại sự kiện
    checkAnswerBtn.addEventListener('click', checkAnswer);
    nextQuestionBtn.addEventListener('click', nextQuestion);
    
    quizTopicSelect.value = ''; // Reset dropdown
}

// ==================== MY LESSONS FUNCTIONS ====================
function initUserLessons() {
    // Thiết lập event listeners cho các nút lưu
    saveLessonBtn.addEventListener('click', saveLesson);
    saveTemplateBtn.addEventListener('click', saveWritingTemplate);
    saveSpeakingNoteBtn.addEventListener('click', saveSpeakingNote);
    
    // Tải dữ liệu ban đầu
    loadUserLessons();
    loadWritingTemplates();
    loadSpeakingNotes();
}

function saveLesson() {
    const title = document.getElementById('lessonTitle').value.trim();
    const type = document.getElementById('lessonType').value;
    const content = document.getElementById('lessonContent').value.trim();
    
    if (!title || !content) {
        showNotification('Vui lòng nhập đầy đủ tiêu đề và nội dung!', 'error');
        return;
    }
    
    const lesson = { title, type, content };
    userDataManager.addLesson(lesson);
    
    showNotification('✅ Bài học đã được lưu thành công!', 'success');
    
    // Reset form
    document.getElementById('lessonTitle').value = '';
    document.getElementById('lessonContent').value = '';
    updateWordCount('lessonContent', 'lessonContentWordCount');
    
    // Reload danh sách
    loadUserLessons();
    updateProgressDisplay(); // Cập nhật số bài học đã tạo
}

function saveWritingTemplate() {
    const type = document.getElementById('templateType').value;
    const structure = document.getElementById('templateStructure').value.trim();
    const example = document.getElementById('templateExample').value.trim();
    
    if (!structure) {
        showNotification('Vui lòng nhập cấu trúc template!', 'error');
        return;
    }
    
    const template = { type, structure, example };
    userDataManager.addWritingTemplate(template);
    
    showNotification('✅ Template đã được lưu thành công!', 'success');
    
    // Reset form
    document.getElementById('templateStructure').value = '';
    document.getElementById('templateExample').value = '';
    updateWordCount('templateStructure', 'templateStructureWordCount');
    
    // Reload danh sách
    loadWritingTemplates();
}

function saveSpeakingNote() {
    const part = document.getElementById('speakingPart').value;
    const topic = document.getElementById('speakingTopic').value.trim();
    const content = document.getElementById('speakingContent').value.trim();
    
    if (!topic || !content) {
        showNotification('Vui lòng nhập đầy đủ chủ đề và nội dung!', 'error');
        return;
    }
    
    const note = { part, topic, content };
    userDataManager.addSpeakingNote(note);
    
    showNotification('✅ Ghi chú speaking đã được lưu thành công!', 'success');
    
    // Reset form
    document.getElementById('speakingTopic').value = '';
    document.getElementById('speakingContent').value = '';
    updateWordCount('speakingContent', 'speakingContentWordCount');
    
    // Reload danh sách
    loadSpeakingNotes();
}

function loadUserLessons() {
    const lessons = userDataManager.userData.lessons;
    lessonsGrid.innerHTML = '';
    
    if (lessons.length === 0) {
        lessonsGrid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <i class="fas fa-book-open"></i>
                <p>Chưa có bài học nào được lưu</p>
                <small>Hãy tạo bài học đầu tiên của bạn ở tab "Tạo bài học"!</small>
            </div>
        `;
        return;
    }
    
    lessons.forEach(lesson => {
        const lessonCard = document.createElement('div');
        lessonCard.className = `lesson-card ${lesson.type}`; // Thêm class theo type
        // Giới hạn nội dung xem trước
        const contentPreview = lesson.content.replace(/<[^>]*>?/gm, ' ').substring(0, 150);
        
        lessonCard.innerHTML = `
            <div class="lesson-header">
                <h4 class="lesson-title">${lesson.title}</h4>
                <span class="lesson-type">${getLessonTypeLabel(lesson.type)}</span>
            </div>
            <div class="lesson-content-preview">${contentPreview}...</div>
            <div class="lesson-footer">
                <small>${lesson.wordCount} từ • ${formatDate(lesson.createdAt)}</small>
                <div class="lesson-actions">
                    <button onclick="editLesson('${lesson.id}')" class="btn-icon btn-sm" title="Sửa">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button onclick="deleteLesson('${lesson.id}')" class="btn-icon btn-sm btn-danger" title="Xóa">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
        lessonsGrid.appendChild(lessonCard);
    });
}

function loadWritingTemplates() {
    const templates = userDataManager.userData.writingTemplates;
    templatesList.innerHTML = '';
    
    if (templates.length === 0) {
        templatesList.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-file-alt"></i>
                <p>Chưa có template nào được lưu</p>
            </div>
        `;
        return;
    }
    
    templates.forEach(template => {
        const templateItem = document.createElement('div');
        templateItem.className = 'template-item';
        templateItem.innerHTML = `
            <div class="template-header">
                <h4>${getTemplateTypeLabel(template.type)}</h4>
                <span class="template-date">${formatDate(template.createdAt)}</span>
            </div>
            <div class="template-content">
                <div class="template-section">
                    <h5>Cấu trúc:</h5>
                    <p>${template.structure.replace(/\n/g, '<br>')}</p>
                </div>
                ${template.example ? `
                <div class="template-section">
                    <h5>Ví dụ:</h5>
                    <p>${template.example.replace(/\n/g, '<br>')}</p>
                </div>` : ''}
            </div>
            <div class="template-actions" style="margin-top: 1rem; border-top: 1px solid var(--border-color); padding-top: 1rem; justify-content: flex-end;">
                <button onclick="editTemplate('${template.id}')" class="btn-icon btn-sm" title="Sửa">
                    <i class="fas fa-edit"></i>
                </button>
                <button onclick="deleteTemplate('${template.id}')" class="btn-icon btn-sm btn-danger" title="Xóa">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        templatesList.appendChild(templateItem);
    });
}

function loadSpeakingNotes() {
    const notes = userDataManager.userData.speakingNotes;
    speakingNotesList.innerHTML = '';
    
    if (notes.length === 0) {
        speakingNotesList.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-microphone-alt"></i>
                <p>Chưa có ghi chú speaking nào</p>
            </div>
        `;
        return;
    }
    
    notes.forEach(note => {
        const noteItem = document.createElement('div');
        noteItem.className = 'speaking-note-item';
        noteItem.innerHTML = `
            <div class="speaking-note-header">
                <div>
                    <span class="speaking-part">${getSpeakingPartLabel(note.part)}</span>
                    <h4 style="margin-top: 0.5rem;">${note.topic}</h4>
                </div>
                <span class="note-date">${formatDate(note.createdAt)}</span>
            </div>
            <div class="speaking-note-content">
                <p>${note.content.replace(/\n/g, '<br>')}</p>
            </div>
            <div class="speaking-note-footer">
                <small>${note.wordCount} từ</small>
                <div class="note-actions">
                    <button onclick="editSpeakingNote('${note.id}')" class="btn-icon btn-sm" title="Sửa">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button onclick="deleteSpeakingNote('${note.id}')" class="btn-icon btn-sm btn-danger" title="Xóa">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
        speakingNotesList.appendChild(noteItem);
    });
}

/**
 * SỬA LỖI: Hoàn thiện các nhãn
 */
function getLessonTypeLabel(type) {
    const types = {
        'vocabulary': 'Từ vựng',
        'writing': 'Writing',
        'speaking': 'Speaking',
        'custom': 'Tùy chỉnh'
    };
    return types[type] || type;
}

/**
 * SỬA LỖI: Hoàn thiện các nhãn
 */
function getTemplateTypeLabel(type) {
    const types = {
        'introduction': 'Introduction',
        'body-paragraph': 'Body Paragraph',
        'conclusion': 'Conclusion',
        'opinion-essay': 'Opinion Essay',
        'discussion-essay': 'Discussion Essay'
    };
    return types[type] || type.charAt(0).toUpperCase() + type.slice(1);
}

function getSpeakingPartLabel(part) {
    const parts = {
        'part1': 'Part 1',
        'part2': 'Part 2',
        'part3': 'Part 3',
        'expressions': 'Useful Expressions'
    };
    return parts[part] || part;
}


function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
}

// ==================== PROGRESS FUNCTIONS ====================
function updateProgressDisplay() {
    const progress = userDataManager.userData.progress;
    
    wordsLearnedEl.textContent = progress.wordsLearned;
    accuracyRateEl.textContent = `${Math.round(progress.accuracyRate)}%`;
    learningStreakEl.textContent = progress.learningStreak;
    lessonsCreatedEl.textContent = userDataManager.userData.lessons.length;
    
    updateDifficultWordsList();
    updateRecentLessonsList();
}

function updateLearningStreak() {
    const progress = userDataManager.userData.progress;
    const today = new Date().toDateString();
    
    // Kiểm tra nếu hôm nay chưa học
    if (progress.lastStudyDate !== today) {
        // Nếu hôm qua không học thì reset streak
        if (progress.lastStudyDate && !userDataManager.isYesterday(progress.lastStudyDate, today)) {
            progress.learningStreak = 0;
            userDataManager.saveUserData();
            updateProgressDisplay(); // Cập nhật lại UI
        }
    }
}

function updateDifficultWordsList() {
    const difficultWords = userDataManager.userData.progress.difficultWords;
    difficultWordsList.innerHTML = '';
    
    if (difficultWords.length === 0) {
        difficultWordsList.innerHTML = `
            <div class="empty-state" style="padding: 1rem;">
                <i class="fas fa-star"></i>
                <p style="font-size: 0.9rem;">Chưa có từ khó nào</p>
                <small style="font-size: 0.8rem;">Bạn có thể đánh dấu từ khó khi học Flashcard</small>
            </div>
        `;
        return;
    }
    
    // Hiển thị 10 từ gần nhất
    difficultWords.slice(-10).reverse().forEach(word => {
        const wordItem = document.createElement('div');
        wordItem.className = 'difficult-word-item';
        wordItem.innerHTML = `
            <div class="word-main">
                <strong>${word.word}</strong>
                <span class="word-phonetic">${word.phonetic}</span>
                <div class="word-meaning">${word.definition}</div>
            </div>
            <button onclick="removeDifficultWord('${word.id}')" class="btn-icon btn-sm btn-danger" title="Xóa">
                <i class="fas fa-times"></i>
            </button>
        `;
        difficultWordsList.appendChild(wordItem);
    });
}

function updateRecentLessonsList() {
    const lessons = userDataManager.userData.lessons.slice(0, 5); // 5 bài gần nhất
    recentLessonsList.innerHTML = '';
    
    if (lessons.length === 0) {
        recentLessonsList.innerHTML = `
            <div class="empty-state" style="padding: 1rem;">
                <i class="fas fa-book"></i>
                <p style="font-size: 0.9rem;">Chưa có bài học nào</p>
            </div>
        `;
        return;
    }
    
    lessons.forEach(lesson => {
        const lessonItem = document.createElement('div');
        lessonItem.className = 'recent-lesson-item';
        lessonItem.innerHTML = `
            <div class="lesson-info" style="flex: 1;">
                <div class="lesson-title">${lesson.title}</div>
                <div class="lesson-meta">
                    <span class="lesson-type-label">${getLessonTypeLabel(lesson.type)}</span>
                    <span class="lesson-date">${formatDate(lesson.createdAt)}</span>
                </div>
            </div>
            <i class="fas fa-chevron-right" style="color: var(--text-muted);"></i>
        `;
        // Click để đi tới bài học
        lessonItem.style.cursor = 'pointer';
        lessonItem.onclick = () => {
            showSection('my-lessons');
            // Tự động mở tab "Bài học đã lưu"
            openTab('saved-tab', document.querySelector('.tab-btn[onclick="openTab(\'saved-tab\')"]'));
        };
        recentLessonsList.appendChild(lessonItem);
    });
}

// ==================== DELETE FUNCTIONS ====================
function deleteLesson(lessonId) {
    if (confirm('Bạn có chắc muốn xóa bài học này?')) {
        userDataManager.deleteLesson(lessonId);
        loadUserLessons();
        updateProgressDisplay(); // Cập nhật số bài học
        showNotification('✅ Bài học đã được xóa', 'success');
    }
}

function deleteTemplate(templateId) {
    if (confirm('Bạn có chắc muốn xóa template này?')) {
        userDataManager.deleteTemplate(templateId);
        loadWritingTemplates();
        showNotification('✅ Template đã được xóa', 'success');
    }
}

function deleteSpeakingNote(noteId) {
    if (confirm('Bạn có chắc muốn xóa ghi chú này?')) {
        userDataManager.deleteSpeakingNote(noteId);
        loadSpeakingNotes();
        showNotification('✅ Ghi chú đã được xóa', 'success');
    }
}

function removeDifficultWord(wordId) {
    if (confirm('Bạn có chắc muốn xóa từ này khỏi danh sách từ khó?')) {
        userDataManager.removeDifficultWord(wordId);
        updateDifficultWordsList();
        showNotification('✅ Đã xóa từ khó', 'success');
    }
}

// ==================== EDIT FUNCTIONS (MỚI) ====================
// Các hàm này được thêm vào để hiển thị modal
function editLesson(lessonId) {
    const lesson = userDataManager.userData.lessons.find(l => l.id === lessonId);
    if (!lesson) return;
    
    editLessonId.value = lesson.id;
    editLessonTitle.value = lesson.title;
    editLessonType.value = lesson.type;
    editLessonContent.value = lesson.content;
    updateWordCount('editLessonContent', 'editLessonContentWordCount'); // Cập nhật word count
    
    // Thêm listener cho word count của modal
    editLessonContent.removeEventListener('input', updateEditLessonWordCount); // Xóa listener cũ (nếu có)
    editLessonContent.addEventListener('input', updateEditLessonWordCount);
    
    editModal.style.display = 'flex';
}

function updateEditLessonWordCount() {
    updateWordCount('editLessonContent', 'editLessonContentWordCount');
}

function closeEditModal() {
    editModal.style.display = 'none';
}

function saveEditedLesson() {
    const id = editLessonId.value;
    const title = editLessonTitle.value.trim();
    const type = editLessonType.value;
    const content = editLessonContent.value.trim();
    
    if (!title || !content) {
        showNotification('Vui lòng nhập đầy đủ tiêu đề và nội dung!', 'error');
        return;
    }
    
    const updated = userDataManager.updateLesson(id, { title, type, content });
    if (updated) {
        showNotification('✅ Bài học đã được cập nhật!', 'success');
        loadUserLessons();
        closeEditModal();
    }
}

function editTemplate(templateId) {
    const template = userDataManager.userData.writingTemplates.find(t => t.id === templateId);
    if (!template) return;
    
    editTemplateId.value = template.id;
    editTemplateType.value = template.type;
    editTemplateStructure.value = template.structure;
    editTemplateExample.value = template.example;
    
    editTemplateModal.style.display = 'flex';
}

function closeEditTemplateModal() {
    editTemplateModal.style.display = 'none';
}

function saveEditedTemplate() {
    const id = editTemplateId.value;
    const type = editTemplateType.value;
    const structure = editTemplateStructure.value.trim();
    const example = editTemplateExample.value.trim();
    
    if (!structure) {
        showNotification('Vui lòng nhập cấu trúc!', 'error');
        return;
    }
    
    const updated = userDataManager.updateTemplate(id, { type, structure, example });
    if (updated) {
        showNotification('✅ Template đã được cập nhật!', 'success');
        loadWritingTemplates();
        closeEditTemplateModal();
    }
}

function editSpeakingNote(noteId) {
    const note = userDataManager.userData.speakingNotes.find(n => n.id === noteId);
    if (!note) return;
    
    editSpeakingId.value = note.id;
    editSpeakingPart.value = note.part;
    editSpeakingTopic.value = note.topic;
    editSpeakingContent.value = note.content;
    
    editSpeakingModal.style.display = 'flex';
}

function closeEditSpeakingModal() {
    editSpeakingModal.style.display = 'none';
}

function saveEditedSpeakingNote() {
    const id = editSpeakingId.value;
    const part = editSpeakingPart.value;
    const topic = editSpeakingTopic.value.trim();
    const content = editSpeakingContent.value.trim();
    
    if (!topic || !content) {
        showNotification('Vui lòng nhập đầy đủ chủ đề và nội dung!', 'error');
        return;
    }
    
    const updated = userDataManager.updateSpeakingNote(id, { part, topic, content });
    if (updated) {
        showNotification('✅ Ghi chú Speaking đã được cập nhật!', 'success');
        loadSpeakingNotes();
        closeEditSpeakingModal();
    }
}

// ==================== TEXT FORMATTING FUNCTIONS (MỚI) ====================
function formatText(textareaId, command) {
    const textarea = document.getElementById(textareaId);
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    let replacement = selectedText;

    if (!selectedText && (command === 'bullet' || command === 'number')) {
        if (command === 'bullet') {
            replacement = '• ';
        } else if (command === 'number') {
            replacement = '1. ';
        }
        textarea.value = textarea.value.substring(0, start) + replacement + textarea.value.substring(end);
        textarea.focus();
        textarea.selectionStart = textarea.selectionEnd = start + replacement.length;
        return;
    }

    switch (command) {
        case 'bold':
            replacement = `<b>${selectedText}</b>`;
            break;
        case 'italic':
            replacement = `<i>${selectedText}</i>`;
            break;
        case 'underline':
            replacement = `<u>${selectedText}</u>`;
            break;
        case 'bullet':
            replacement = selectedText.split('\n').map(line => `• ${line}`).join('\n');
            break;
        case 'number':
            replacement = selectedText.split('\n').map((line, index) => `${index + 1}. ${line}`).join('\n');
            break;
    }
    
    textarea.value = textarea.value.substring(0, start) + replacement + textarea.value.substring(end);
    textarea.focus();
    // Cập nhật word count sau khi chỉnh sửa
    updateWordCount(textareaId, textareaId + 'WordCount');
}

async function pasteFromClipboard(textareaId) {
    const textarea = document.getElementById(textareaId);
    try {
        const text = await navigator.clipboard.readText();
        textarea.value += text;
        showNotification('✅ Đã dán nội dung!', 'success');
        updateWordCount(textareaId, textareaId + 'WordCount');
    } catch (err) {
        showNotification('❌ Không thể dán nội dung. Vui lòng kiểm tra quyền truy cập clipboard.', 'error');
    }
}

function clearFormatting(textareaId) {
    const textarea = document.getElementById(textareaId);
    // Xóa các thẻ HTML đơn giản
    textarea.value = textarea.value.replace(/<[^>]*>?/gm, '');
    updateWordCount(textareaId, textareaId + 'WordCount');
}


// ==================== GLOBAL FUNCTIONS ====================
// Gán các hàm vào window để HTML onclick có thể gọi
// (Một số hàm đã có trong script inline của HTML, nhưng gán lại sẽ đảm bảo phiên bản JS được dùng)
window.openTab = function(tabId, element) {
    // Ẩn tất cả tab content
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Bỏ active tất cả tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Hiện tab được chọn
    document.getElementById(tabId).classList.add('active');
    
    // Active tab button tương ứng
    if (element) {
        element.classList.add('active');
    } else if (event) {
        event.currentTarget.classList.add('active');
    }
}

window.markCurrentWordDifficult = markCurrentWordDifficult;
window.saveCurrentWord = saveCurrentWord;
window.speakCurrentWord = speakCurrentWord;

// Delete functions
window.deleteLesson = deleteLesson;
window.deleteTemplate = deleteTemplate;
window.deleteSpeakingNote = deleteSpeakingNote;
window.removeDifficultWord = removeDifficultWord;

// Edit functions
window.editLesson = editLesson;
window.editTemplate = editTemplate;
window.editSpeakingNote = editSpeakingNote;

// Modal controls
window.closeEditModal = closeEditModal;
window.saveEditedLesson = saveEditedLesson;
window.closeEditTemplateModal = closeEditTemplateModal;
window.saveEditedTemplate = saveEditedTemplate;
window.closeEditSpeakingModal = closeEditSpeakingModal;
window.saveEditedSpeakingNote = saveEditedSpeakingNote;

// Text tools
window.formatText = formatText;
window.pasteFromClipboard = pasteFromClipboard;
window.clearFormatting = clearFormatting;

// Word count function (ghi đè hàm inline)
window.updateWordCount = function(textareaId, counterId) {
    const textarea = document.getElementById(textareaId);
    const counter = document.getElementById(counterId);
    if (textarea && counter) {
        const text = textarea.value;
        const wordCount = userDataManager.countWords(text);
        counter.textContent = `${wordCount} từ`;
    }
};

// Khởi chạy ứng dụng khi trang được tải
document.addEventListener('DOMContentLoaded', initApp);