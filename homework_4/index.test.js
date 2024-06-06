describe('renderCalendar', () => {
    let currentDate, days;

    beforeEach(() => {
        currentDate = document.createElement('div');
        days = document.createElement('div');
        currentDate.className = 'current-date';
        days.className = 'days';
        document.body.appendChild(currentDate);
        document.body.appendChild(days);
    });

    afterEach(() => {
        document.body.removeChild(currentDate);
        document.body.removeChild(days);
    });

    it('renders the current month and year', () => {
        const date = new Date();
        const currentYear = date.getFullYear();
        const currentMonth = date.getMonth();
        renderCalendar();
        expect(currentDate.textContent).toBe(`${['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][currentMonth]} ${currentYear}`);
    });

    it('renders the correct days for the current month', () => {
        const date = new Date();
        const currentYear = date.getFullYear();
        const currentMonth = date.getMonth();
        renderCalendar();
        const daysList = days.innerHTML;
        const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        for (let i = 1; i <= lastDayOfMonth; i++) {
            expect(daysList.includes(`${i}`)).toBe(true);
        }
    });

    it('renders the correct inactive days for the previous month', () => {
        const date = new Date();
        const currentYear = date.getFullYear();
        const currentMonth = date.getMonth();
        renderCalendar();
        const daysList = days.innerHTML;
        const lastDayOfLastMonth = new Date(currentYear, currentMonth, 0).getDate();
        for (let i = 1; i <= lastDayOfLastMonth; i++) {
            expect(daysList.includes(`${lastDayOfLastMonth - i + 1}`)).toBe(true);
        }
    });

    it('renders the correct inactive days for the next month', () => {
        const date = new Date();
        const currentYear = date.getFullYear();
        const currentMonth = date.getMonth();
        renderCalendar();
        const daysList = days.innerHTML;
        const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        for (let i = 1; i <= 6 - lastDayOfMonth % 7; i++) {
            expect(daysList.includes(`${i}`)).toBe(true);
        }
    });
});

describe('next', () => {
    it('updates the current month and year when the next month is clicked', () => {
        const date = new Date();
        const currentYear = date.getFullYear();
        const currentMonth = date.getMonth();
        next();
        expect(currentMonth).toBe((currentMonth + 1) % 12);
        expect(currentYear).toBe(currentMonth === 11 ? currentYear + 1 : currentYear);
    });
});

describe('previous', () => {
    it('updates the current month and year when the previous month is clicked', () => {
        const date = new Date();
        const currentYear = date.getFullYear();
        const currentMonth = date.getMonth();
        previous();
        expect(currentMonth).toBe(currentMonth === 0 ? 11 : currentMonth - 1);
        expect(currentYear).toBe(currentMonth === 0 ? currentYear - 1 : currentYear);
    });
});
