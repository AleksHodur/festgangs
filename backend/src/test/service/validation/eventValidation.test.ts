import { expect, test } from '@jest/globals';
import eventValidation from "../../../service/validation/eventValidation";

test("return false given an empty string", () => {
    expect(eventValidation.validateCity("")).toBe(false);
});

test("return true given a string", () => {
    expect(eventValidation.validateCity("Oviedo")).toBe(true);
});