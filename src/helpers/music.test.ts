import { Note, NotePitch } from "./music";

describe("Music Helpers", () => {
  describe("Note", () => {
    it("Root", () => {
      expect(new Note(NotePitch.C).root()).toEqual(
        new Note(NotePitch.C),
      );
    });

    it("Minor Third", () => {
      expect(new Note(NotePitch.C).minorThird()).toEqual(
        new Note(NotePitch.Eb),
      );
    });

    it("Major Third", () => {
      expect(new Note(NotePitch.C).majorThird()).toEqual(
        new Note(NotePitch.E),
      );
    });

    it("Perfect Fifth", () => {
      expect(new Note(NotePitch.C).fifth()).toEqual(
        new Note(NotePitch.G),
      );
    });
  });
});