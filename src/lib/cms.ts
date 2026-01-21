import programs from '../data/academy/programs.json';
import guidelines from '../data/journal/guidelines.json';
import team from '../data/shared/team.json';

export const getPrograms = () => programs;
export const getGuidelines = () => guidelines;
export const getTeam = () => team;

export const getContactInfo = () => ({
  // Updated to match new array structure
  addresses: team.addresses, 
  phones: team.phones,
  emails: {
    academy: "info@psa.com",
    journal: guidelines.submission_email,
    cc: guidelines.cc_email,
    list: team.emails
  }
});
