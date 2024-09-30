export default class Utils {
    static capFirstLetter(s: string) : string {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }
}