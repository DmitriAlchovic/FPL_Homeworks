class Calendar {
  constructor() {
    this.currentDate = document.querySelector('.current-date');
    this.days = document.querySelector('.days');
    this.date = new Date();
    this.currentYear = this.date.getFullYear();
    this.currentMonth = this.date.getMonth();
    this.month = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    this.notes = {};

    this.renderCalendar();
  }

  renderCalendar() {
    let lastDayOfMonth = new Date(
      this.currentYear,
      this.currentMonth + 1,
      0
    ).getDate();
    let lastDayOfLastMonth = new Date(
      this.currentYear,
      this.currentMonth,
      0
    ).getDate();
    let lastDayOfMonth_ = new Date(
      this.currentYear,
      this.currentMonth,
      lastDayOfMonth
    ).getDay();
    let firstDayOfMonth = new Date(
      this.currentYear,
      this.currentMonth,
      1
    ).getDay();

    let lists = '';

    for (let i = firstDayOfMonth; i > 0; i--) {
      lists += `<li class="inactive">${lastDayOfLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDayOfMonth; i++) {
      let isDay =
        i === this.date.getDate() &&
        this.currentMonth === this.date.getMonth() &&
        this.currentYear === this.date.getFullYear()
          ? ' active'
          : '';
      lists += `<li class="${isDay}" data-date="${i}">${i}</li>`;
    }

    for (let i = lastDayOfMonth_; i < 6; i++) {
      lists += `<li class="inactive">${i - lastDayOfMonth_ + 1}</li>`;
    }

    this.currentDate.innerHTML = `${this.month[this.currentMonth]} ${
      this.currentYear
    }`;
    this.days.innerHTML = lists;

    this.days.addEventListener('click', (event) => {
      if (event.target.tagName === 'LI') {
        let date = parseInt(event.target.dataset.date);
        this.showNoteInput(date);
      }
    });

    for (let i = 1; i <= lastDayOfMonth; i++) {
      // Get the notes for the current date from local storage
      let notes = this.getNotes(i);
      if (notes.length > 0) {
        let noteList = document.querySelector(`li[data-date="${i}"]`);
        console.log(notes, noteList, 'NOTES');
        notes.forEach((note) => {
          if (!this.notes[i]) {
            this.notes[i] = [];
          }
          this.notes[i].push(note);
          let noteElement = document.createElement('div');
          noteElement.textContent = note;
          let removeButton = document.createElement('button');
          removeButton.textContent = 'x';
          removeButton.addEventListener('click', () => {
            this.removeNote(i, note);
          });
          noteElement.appendChild(removeButton);
          noteList.appendChild(noteElement);
        });
      }
    }
  }

  getNotes(date) {
    let notes = localStorage.getItem(
      `notes-${date}-${this.currentYear}-${this.currentMonth}`
    );
    console.log(
      notes,
      `notes-${date}-${this.currentYear}-${this.currentMonth}`
    );
    return notes ? JSON.parse(notes) : [];
  }

  showNoteInput(date) {
    let noteInput = document.createElement('input');
    noteInput.type = 'text';
    noteInput.placeholder = 'Enter a note';
    console.log(noteInput);
    noteInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        this.saveNote(date, noteInput.value);
        noteInput.remove();
      }
    });

    let saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.addEventListener('click', () => {
      this.saveNote(date, noteInput.value);
      noteInput.remove();
      saveButton.remove();
    });

    let noteContainer = document.createElement('div');
    noteContainer.appendChild(noteInput);
    noteContainer.appendChild(saveButton);
    noteContainer.classList.add('event-input');

    let noteList = document.querySelector(`li[data-date="${date}"]`);
    noteList.appendChild(noteContainer);
  }

  saveNote(date, note) {
    if (!this.notes[date]) {
      this.notes[date] = [];
    }
    this.notes[date].push(note);

    // Store the notes in local storage
    localStorage.setItem(
      `notes-${date}-${this.currentYear}-${this.currentMonth}`,
      JSON.stringify(this.notes[date])
    );

    let noteList = document.querySelector(`li[data-date="${date}"]`);

    this.notes[date].forEach((note) => {
      let noteElement = document.createElement('div');
      noteElement.textContent = note;
      let removeButton = document.createElement('button');
      removeButton.textContent = 'x';
      removeButton.addEventListener('click', () => {
        this.removeNote(date, note);
      });
      noteElement.appendChild(removeButton);
      noteList.appendChild(noteElement);
    });
    this.renderCalendar();
  }

  removeNote(date, note) {
    localStorage.removeItem(
      `notes-${date}-${this.currentYear}-${this.currentMonth}`
    );
    this.notes[date] = this.notes[date].filter((n) => n !== note);
    let noteList = document.querySelector(`li[data-date="${date}"]`);
    noteList.innerHTML = '';
    this.notes[date].forEach((note) => {
      let noteElement = document.createElement('div');
      noteElement.textContent = note;
      let removeButton = document.createElement('button');
      removeButton.textContent = 'x';
      removeButton.addEventListener('click', () => {
        this.removeNote(date, note);
      });
      noteElement.appendChild(removeButton);
      noteList.appendChild(noteElement);
    });
    localStorage.removeItem(
      `notes-${date}-${this.currentYear}-${this.currentMonth}`
    );
    this.renderCalendar();
  }

  next() {
    this.currentYear =
      this.currentMonth === 11 ? this.currentYear + 1 : this.currentYear;
    this.currentMonth = (this.currentMonth + 1) % 12;
    this.renderCalendar();
  }

  // Function to navigate to the previous month
  previous() {
    this.currentYear =
      this.currentMonth === 0 ? this.currentYear - 1 : this.currentYear;
    this.currentMonth = this.currentMonth === 0 ? 11 : this.currentMonth - 1;
    this.renderCalendar();
  }
}

// Create an instance of the Calendar class
const calendar = new Calendar();
