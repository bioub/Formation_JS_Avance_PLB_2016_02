describe("Ensemble des tests de la classe Carre", function() {
  it("verifie la methode aire()", function() {

    var carre = new Carre(0, 0, 10);

    expect(carre.aire()).toBe(100);
  });
});