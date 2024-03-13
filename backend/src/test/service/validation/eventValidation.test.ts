import { expect, test } from '@jest/globals';
import eventValidation from "../../../service/validation/eventValidation";

test("return false given an empty string", () => {
    expect(eventValidation.validateProperNoun("")).toBe(false);
});

test("return true given a basic string", () => {
    expect(eventValidation.validateProperNoun("London")).toBe(true);
});

test("return false given a string without letters", () => {
    expect(eventValidation.validateProperNoun("123_")).toBe(false);
});

test("return true given a string with special letters", () => {
    expect(eventValidation.validateProperNoun("Gijón")).toBe(true);
    expect(eventValidation.validateProperNoun("España")).toBe(true);
    expect(eventValidation.validateProperNoun("Björk")).toBe(true);
});

//special letters outside ascii code