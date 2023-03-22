describe("Test serie", () => {
    test(`
    TEST CI SUCCESS`,
     async () => {
        expect(1).toEqual(1);
    });

    test(`
    TEST CI FAILED`,
     async () => {
        expect(1).toEqual(0);
    });
});