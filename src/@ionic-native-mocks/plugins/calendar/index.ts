import { Calendar } from '@ionic-native/calendar/ngx';

export interface CalendarOptions {
    /**
     * Id
     */
    id?: string;
    /**
     *
     */
    firstReminderMinutes?: number;
    /**
     *
     */
    secondReminderMinutes?: number;
    /**
     * Recurrence. Can be set to `daily`, `weekly`, `monthly` or `yearly`
     */
    recurrence?: string;
    /**
     * Recurrence interval. Valid only when `recurrence` option is set.
     */
    recurrenceInterval?: number;
    /**
     * Recurrence end date. Valid only when `recurrence` option is set.
     */
    recurrenceEndDate?: Date;
    /**
     * Calendar name. Ths is supported by `iOS` only.
     */
    calendarName?: string;
    /**
     * Calendar id
     */
    calendarId?: number;
    /**
     * URL
     */
    url?: string;
}

export class CalendarMock extends Calendar {
    hasReadWritePermission(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            resolve(true);
        });
    }
    /**
     * Check if we have read permission
     * @returns {Promise<boolean>}
     */
    hasReadPermission(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            resolve(true);
        });
    }
    /**
     * Check if we have write permission
     * @returns {Promise<boolean>}
     */
    hasWritePermission(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            resolve(true);
        });
    }
    /**
     * Request write permission
     * @returns {Promise<any>}
     */
    requestWritePermission(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Request read permission
     * @returns {Promise<any>}
     */
    requestReadPermission(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Requests read/write permissions
     * @returns {Promise<any>}
     */
    requestReadWritePermission(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Create a calendar. (iOS only)
     *
     * @param {string | Object} nameOrOptions  either a string name or a options object. If string, provide the calendar name. IF an object, provide a calendar name as a string and a calendar color in hex format as a string
     * @returns {Promise<any>} Returns a Promise
     */
    createCalendar(nameOrOptions: string | any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Delete a calendar. (iOS only)
     * @param {string} name  Name of the calendar to delete.
     * @returns {Promise<any>} Returns a Promise
     */
    deleteCalendar(name: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Returns the default calendar options.
     *
     * @return {CalendarOptions} Returns an object with the default calendar options
     */
    getCalendarOptions(): CalendarOptions {
        let calendarOptions: CalendarOptions;
        return calendarOptions;
    }
    /**
     * Silently create an event.
     * @param {string} [title]  The event title
     * @param {string} [location]  The event location
     * @param {string} [notes]  The event notes
     * @param {Date} [startDate]  The event start date
     * @param {Date} [endDate]  The event end date
     * @returns {Promise<any>} Returns a Promise
     */
    createEvent(title?: string, location?: string, notes?: string, startDate?: Date, endDate?: Date): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Silently create an event with additional options.
     *
     * @param {string} [title]  The event title
     * @param {string} [location]  The event location
     * @param {string} [notes]  The event notes
     * @param {Date} [startDate]  The event start date
     * @param {Date} [endDate]  The event end date
     * @param {CalendarOptions} [options]  Additional options, see `getCalendarOptions`
     * @returns {Promise<any>} Returns a Promise
     */
    createEventWithOptions(title?: string, location?: string, notes?: string, startDate?: Date, endDate?: Date, options?: CalendarOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Interactively create an event.
     *
     * @param {string} [title]  The event title
     * @param {string} [location]  The event location
     * @param {string} [notes]  The event notes
     * @param {Date} [startDate]  The event start date
     * @param {Date} [endDate]  The event end date
     * @returns {Promise<any>} Returns a Promise
     */
    createEventInteractively(title?: string, location?: string, notes?: string, startDate?: Date, endDate?: Date): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Interactively create an event with additional options.
     *
     * @param {string} [title]  The event title
     * @param {string} [location]  The event location
     * @param {string} [notes]  The event notes
     * @param {Date} [startDate]  The event start date
     * @param {Date} [endDate]  The event end date
     * @param {CalendarOptions} [options]  Additional options, see `getCalendarOptions`
     * @returns {Promise<any>}
     */
    createEventInteractivelyWithOptions(title?: string, location?: string, notes?: string, startDate?: Date, endDate?: Date, options?: CalendarOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Find an event.
     *
     * @param {string} [title]  The event title
     * @param {string} [location]  The event location
     * @param {string} [notes]  The event notes
     * @param {Date} [startDate]  The event start date
     * @param {Date} [endDate]  The event end date
     * @returns {Promise<any>}
     */
    findEvent(title?: string, location?: string, notes?: string, startDate?: Date, endDate?: Date): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Find an event with additional options.
     * @param {string} [title]  The event title
     * @param {string} [location]  The event location
     * @param {string} [notes]  The event notes
     * @param {Date} [startDate]  The event start date
     * @param {Date} [endDate]  The event end date
     * @param {CalendarOptions} [options]  Additional options, see `getCalendarOptions`
     * @returns {Promise<any>} Returns a Promise that resolves with the event, or rejects with an error.
     */
    findEventWithOptions(title?: string, location?: string, notes?: string, startDate?: Date, endDate?: Date, options?: CalendarOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Find a list of events within the specified date range. (Android only)
     *
     * @param {Date} [startDate]  The start date
     * @param {Date} [endDate]  The end date
     * @returns {Promise<any>} Returns a Promise that resolves with the list of events, or rejects with an error.
     */
    listEventsInRange(startDate: Date, endDate: Date): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Get a list of all calendars.
     * @returns {Promise<any>} A Promise that resolves with the list of calendars, or rejects with an error.
     */
    listCalendars(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Get a list of all future events in the specified calendar. (iOS only)
     * @returns {Promise<any>} Returns a Promise that resolves with the list of events, or rejects with an error.
     */
    findAllEventsInNamedCalendar(calendarName: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Modify an event. (iOS only)
     *
     * @param {string} [title]  The event title
     * @param {string} [location]  The event location
     * @param {string} [notes]  The event notes
     * @param {Date} [startDate]  The event start date
     * @param {Date} [endDate]  The event end date
     * @param {string} [newTitle]  The new event title
     * @param {string} [newLocation]  The new event location
     * @param {string} [newNotes]  The new event notes
     * @param {Date} [newStartDate]  The new event start date
     * @param {Date} [newEndDate]  The new event end date
     * @return Returns a Promise
     */
    modifyEvent(title?: string, location?: string, notes?: string, startDate?: Date, endDate?: Date, newTitle?: string, newLocation?: string, newNotes?: string, newStartDate?: Date, newEndDate?: Date): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Modify an event with additional options. (iOS only)
     *
     * @param {string} [title]  The event title
     * @param {string} [location]  The event location
     * @param {string} [notes]  The event notes
     * @param {Date} [startDate]  The event start date
     * @param {Date} [endDate]  The event end date
     * @param {string} [newTitle]  The new event title
     * @param {string} [newLocation]  The new event location
     * @param {string} [newNotes]  The new event notes
     * @param {Date} [newStartDate]  The new event start date
     * @param {Date} [newEndDate]  The new event end date
     * @param {CalendarOptions} [filterOptions] Event Options, see `getCalendarOptions`
     * @param {CalendarOptions} [newOptions]  New event options, see `getCalendarOptions`
     * @return Returns a Promise
     */
    modifyEventWithOptions(title?: string, location?: string, notes?: string, startDate?: Date, endDate?: Date, newTitle?: string, newLocation?: string, newNotes?: string, newStartDate?: Date, newEndDate?: Date, filterOptions?: CalendarOptions, newOptions?: CalendarOptions): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Delete an event.
     *
     * @param {string} [title]  The event title
     * @param {string} [location]  The event location
     * @param {string} [notes]  The event notes
     * @param {Date} [startDate]  The event start date
     * @param {Date} [endDate]  The event end date
     * @return Returns a Promise
     */
    deleteEvent(title?: string, location?: string, notes?: string, startDate?: Date, endDate?: Date): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Delete an event from the specified Calendar. (iOS only)
     *
     * @param {string} [title]  The event title
     * @param {string} [location]  The event location
     * @param {string} [notes]  The event notes
     * @param {Date} [startDate]  The event start date
     * @param {Date} [endDate]  The event end date
     * @param {string} calendarName
     * @return Returns a Promise
     */
    deleteEventFromNamedCalendar(title?: string, location?: string, notes?: string, startDate?: Date, endDate?: Date, calendarName?: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    /**
     * Open the calendar at the specified date.
     * @param {Date} date The date you want to open the calendar on
     * @return {Promise<any>} Promise returns a promise
     */
    openCalendar(date: Date): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
}
