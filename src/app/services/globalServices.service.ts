import { Injectable } from "@angular/core";

@Injectable()
export class GlobalServices {
    private static rules: JSON;
    public static getRules() {
        return this.rules;
    }

    public static setRules(rules: JSON) {
        this.rules = rules;
    }
}