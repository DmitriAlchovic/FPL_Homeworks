class Calendar {
    private currentDate: HTMLElement | null;
    private days: HTMLElement | null;
    private date: Date;
    private currentYear: number;
    private currentMonth: number;
    private month: string[];
    private notes: { [key: string]: string[] };
  
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
  
    renderCalendar(): void {
      // ... (the rest of the code remains the same)
    }
  
    getNotes(date: number): string[] {
      // ... (the rest of the code remains the same)
    }
  
    showNoteInput(date: number): void {
      // ... (the rest of the code remains the same)
    }
  
    saveNote(date: number, note: string): void {
      // ... (the rest of the code remains the same)
    }
  
    removeNote(date: number, note: string): void {
      // ... (the rest of the code remains the same)
    }
  
    next(): void {
      this.currentYear =
        this.currentMonth === 11 ? this.currentYear + 1 : this.currentYear;
      this.currentMonth = (this.currentMonth + 1) % 12;
      this.renderCalendar();
    }
  
    previous(): void {
      this.currentYear =
        this.currentMonth === 0 ? this.currentYear - 1 : this.currentYear;
      this.currentMonth = this.currentMonth === 0 ? 11 : this.currentMonth - 1;
      this.renderCalendar();
    }
  }
   