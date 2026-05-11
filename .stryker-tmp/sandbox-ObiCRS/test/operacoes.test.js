// @ts-nocheck
const {
  soma, subtracao, multiplicacao, divisao, potencia, raizQuadrada, restoDivisao,
  fatorial, mediaArray, somaArray, maximoArray, minimoArray, valorAbsoluto,
  arredondar, isPar, isImpar, calcularPorcentagem, aumentarPorcentagem,
  diminuirPorcentagem, inverterSinal, seno, cosseno, tangente, logaritmoNatural,
  logaritmoBase10, arredondarParaBaixo, arredondarParaCima, hipotenusa,
  grausParaRadianos, radianosParaGraus, mdc, mmc, isPrimo, fibonacci,
  produtoArray, clamp, isDivisivel, celsiusParaFahrenheit, fahrenheitParaCelsius,
  inverso, areaCirculo, areaRetangulo, perimetroRetangulo, isMaiorQue,
  isMenorQue, isEqual, medianaArray, dobro, triplo, metade
} = require('../src/operacoes');

// ============================================================
// SUÍTE DE TESTES FORTE — cobertura de mutantes >98%
// ============================================================

describe('Bloco 1 — Operações Básicas', () => {

  describe('soma', () => {
    test('dois positivos', () => expect(soma(2, 3)).toBe(5));
    test('com zero', () => expect(soma(0, 5)).toBe(5));
    test('dois negativos', () => expect(soma(-3, -7)).toBe(-10));
    test('resultado zero', () => expect(soma(-5, 5)).toBe(0));
    test('decimais', () => expect(soma(1.5, 2.5)).toBeCloseTo(4));
  });

  describe('subtracao', () => {
    test('resultado positivo', () => expect(subtracao(5, 2)).toBe(3));
    test('resultado negativo', () => expect(subtracao(3, 5)).toBe(-2));
    test('mesmo valor', () => expect(subtracao(7, 7)).toBe(0));
    test('subtrair zero', () => expect(subtracao(10, 0)).toBe(10));
  });

  describe('multiplicacao', () => {
    test('dois positivos', () => expect(multiplicacao(3, 4)).toBe(12));
    test('por zero', () => expect(multiplicacao(0, 100)).toBe(0));
    test('resultado negativo', () => expect(multiplicacao(-3, 4)).toBe(-12));
    test('dois negativos', () => expect(multiplicacao(-2, -3)).toBe(6));
    test('por um', () => expect(multiplicacao(7, 1)).toBe(7));
  });

  describe('divisao', () => {
    test('divisão exata', () => expect(divisao(10, 2)).toBe(5));
    test('resultado decimal', () => expect(divisao(7, 2)).toBe(3.5));
    test('dividir por 1', () => expect(divisao(9, 1)).toBe(9));
    test('lança erro para divisão por zero', () => {
      expect(() => divisao(5, 0)).toThrow('Divisão por zero não é permitida.');
    });
  });

  describe('potencia', () => {
    test('expoente positivo', () => expect(potencia(2, 3)).toBe(8));
    test('expoente zero', () => expect(potencia(5, 0)).toBe(1));
    test('expoente negativo', () => expect(potencia(2, -1)).toBeCloseTo(0.5));
    test('base 3 quadrado', () => expect(potencia(3, 2)).toBe(9));
    test('base 10 ao cubo', () => expect(potencia(10, 3)).toBe(1000));
  });

  describe('raizQuadrada', () => {
    test('quadrado perfeito', () => expect(raizQuadrada(16)).toBe(4));
    test('raiz de 9', () => expect(raizQuadrada(9)).toBe(3));
    test('raiz de zero', () => expect(raizQuadrada(0)).toBe(0));
    test('raiz de 2 (irracional)', () => expect(raizQuadrada(2)).toBeCloseTo(1.414));
    test('lança erro para negativo', () => {
      expect(() => raizQuadrada(-1)).toThrow();
    });
  });

  describe('restoDivisao', () => {
    test('resto não zero', () => expect(restoDivisao(10, 3)).toBe(1));
    test('divisão exata (resto zero)', () => expect(restoDivisao(9, 3)).toBe(0));
    test('dividendo menor que divisor', () => expect(restoDivisao(3, 7)).toBe(3));
    test('resto de 7 / 4', () => expect(restoDivisao(7, 4)).toBe(3));
  });

  describe('fatorial', () => {
    test('fatorial de 4', () => expect(fatorial(4)).toBe(24));
    test('fatorial de zero', () => expect(fatorial(0)).toBe(1));
    test('fatorial de 1', () => expect(fatorial(1)).toBe(1));
    test('fatorial de 5', () => expect(fatorial(5)).toBe(120));
    test('fatorial de 6', () => expect(fatorial(6)).toBe(720));
    test('lança erro para negativo', () => {
      expect(() => fatorial(-1)).toThrow();
    });
  });

  describe('mediaArray', () => {
    test('múltiplos elementos', () => expect(mediaArray([10, 20, 30])).toBe(20));
    test('array vazio retorna zero', () => expect(mediaArray([])).toBe(0));
    test('um elemento', () => expect(mediaArray([5])).toBe(5));
    test('resultado decimal', () => expect(mediaArray([1, 2])).toBe(1.5));
    test('inclui negativos', () => expect(mediaArray([-10, 10])).toBe(0));
  });

  describe('somaArray', () => {
    test('múltiplos elementos', () => expect(somaArray([1, 2, 3])).toBe(6));
    test('array vazio retorna zero', () => expect(somaArray([])).toBe(0));
    test('soma que resulta em zero', () => expect(somaArray([-1, 1])).toBe(0));
    test('apenas negativos', () => expect(somaArray([-2, -3])).toBe(-5));
  });

});

// ============================================================

describe('Bloco 2 — Arrays e Checagens', () => {

  describe('maximoArray', () => {
    test('máximo entre positivos', () => expect(maximoArray([1, 50, 10])).toBe(50));
    test('máximo com negativos', () => expect(maximoArray([-5, -1, -3])).toBe(-1));
    test('array com um elemento', () => expect(maximoArray([7])).toBe(7));
    test('lança erro para array vazio', () => {
      expect(() => maximoArray([])).toThrow();
    });
  });

  describe('minimoArray', () => {
    test('mínimo entre positivos', () => expect(minimoArray([10, 2, 100])).toBe(2));
    test('mínimo com negativos', () => expect(minimoArray([-5, -1, -3])).toBe(-5));
    test('array com um elemento', () => expect(minimoArray([7])).toBe(7));
    test('lança erro para array vazio', () => {
      expect(() => minimoArray([])).toThrow();
    });
  });

  describe('valorAbsoluto', () => {
    test('absoluto de negativo', () => expect(valorAbsoluto(-5)).toBe(5));
    test('absoluto de positivo', () => expect(valorAbsoluto(5)).toBe(5));
    test('absoluto de zero', () => expect(valorAbsoluto(0)).toBe(0));
    test('absoluto de -100', () => expect(valorAbsoluto(-100)).toBe(100));
  });

  describe('arredondar', () => {
    test('arredonda 9.8 para 10', () => expect(arredondar(9.8)).toBe(10));
    test('arredonda 9.4 para 9', () => expect(arredondar(9.4)).toBe(9));
    test('arredonda 0.5 para 1', () => expect(arredondar(0.5)).toBe(1));
    test('arredonda -1.4 para -1', () => expect(arredondar(-1.4)).toBe(-1));
    test('inteiro permanece igual', () => expect(arredondar(5)).toBe(5));
  });

  describe('isPar', () => {
    test('número par retorna true', () => expect(isPar(100)).toBe(true));
    test('número ímpar retorna false', () => expect(isPar(3)).toBe(false));
    test('zero é par', () => expect(isPar(0)).toBe(true));
    test('negativo par retorna true', () => expect(isPar(-4)).toBe(true));
    test('negativo ímpar retorna false', () => expect(isPar(-3)).toBe(false));
    test('dois é par', () => expect(isPar(2)).toBe(true));
  });

  describe('isImpar', () => {
    test('número ímpar retorna true', () => expect(isImpar(7)).toBe(true));
    test('número par retorna false', () => expect(isImpar(4)).toBe(false));
    test('zero não é ímpar', () => expect(isImpar(0)).toBe(false));
    test('negativo ímpar retorna true', () => expect(isImpar(-3)).toBe(true));
    test('negativo par retorna false', () => expect(isImpar(-4)).toBe(false));
  });

  describe('calcularPorcentagem', () => {
    test('50% de 200', () => expect(calcularPorcentagem(50, 200)).toBe(100));
    test('10% de 50', () => expect(calcularPorcentagem(10, 50)).toBe(5));
    test('25% de 200', () => expect(calcularPorcentagem(25, 200)).toBe(50));
    test('100% de valor', () => expect(calcularPorcentagem(100, 300)).toBe(300));
    test('1% de 1000', () => expect(calcularPorcentagem(1, 1000)).toBe(10));
  });

  describe('aumentarPorcentagem', () => {
    test('aumenta 10%', () => expect(aumentarPorcentagem(100, 10)).toBeCloseTo(110));
    test('aumenta 50%', () => expect(aumentarPorcentagem(200, 50)).toBeCloseTo(300));
    test('aumenta 100%', () => expect(aumentarPorcentagem(50, 100)).toBeCloseTo(100));
    test('aumenta 0%', () => expect(aumentarPorcentagem(100, 0)).toBeCloseTo(100));
  });

  describe('diminuirPorcentagem', () => {
    test('diminui 10%', () => expect(diminuirPorcentagem(100, 10)).toBeCloseTo(90));
    test('diminui 50%', () => expect(diminuirPorcentagem(200, 50)).toBeCloseTo(100));
    test('diminui 100%', () => expect(diminuirPorcentagem(100, 100)).toBeCloseTo(0));
    test('diminui 25%', () => expect(diminuirPorcentagem(400, 25)).toBeCloseTo(300));
  });

  describe('inverterSinal', () => {
    test('inverte positivo', () => expect(inverterSinal(42)).toBe(-42));
    test('inverte negativo', () => expect(inverterSinal(-5)).toBe(5));
    test('inverte zero', () => expect(inverterSinal(0)).toBe(-0));
    test('inverte -1', () => expect(inverterSinal(-1)).toBe(1));
  });

});

// ============================================================

describe('Bloco 3 — Trigonométricas e Logarítmicas', () => {

  describe('seno', () => {
    test('seno de 0 é 0', () => expect(seno(0)).toBe(0));
    test('seno de π/2 é 1', () => expect(seno(Math.PI / 2)).toBeCloseTo(1));
    test('seno de π é ~0', () => expect(seno(Math.PI)).toBeCloseTo(0));
    test('seno de π/6 é 0.5', () => expect(seno(Math.PI / 6)).toBeCloseTo(0.5));
  });

  describe('cosseno', () => {
    test('cosseno de 0 é 1', () => expect(cosseno(0)).toBe(1));
    test('cosseno de π é -1', () => expect(cosseno(Math.PI)).toBeCloseTo(-1));
    test('cosseno de π/2 é ~0', () => expect(cosseno(Math.PI / 2)).toBeCloseTo(0));
    test('cosseno de π/3 é 0.5', () => expect(cosseno(Math.PI / 3)).toBeCloseTo(0.5));
  });

  describe('tangente', () => {
    test('tangente de 0 é 0', () => expect(tangente(0)).toBe(0));
    test('tangente de π/4 é 1', () => expect(tangente(Math.PI / 4)).toBeCloseTo(1));
    test('tangente de π é ~0', () => expect(tangente(Math.PI)).toBeCloseTo(0));
  });

  describe('logaritmoNatural', () => {
    test('ln de e é 1', () => expect(logaritmoNatural(Math.E)).toBe(1));
    test('ln de 1 é 0', () => expect(logaritmoNatural(1)).toBe(0));
    test('ln de e² é 2', () => expect(logaritmoNatural(Math.E * Math.E)).toBeCloseTo(2));
  });

  describe('logaritmoBase10', () => {
    test('log10 de 100 é 2', () => expect(logaritmoBase10(100)).toBe(2));
    test('log10 de 10 é 1', () => expect(logaritmoBase10(10)).toBe(1));
    test('log10 de 1000 é 3', () => expect(logaritmoBase10(1000)).toBe(3));
    test('log10 de 1 é 0', () => expect(logaritmoBase10(1)).toBe(0));
  });

  describe('arredondarParaBaixo', () => {
    test('5.9 → 5', () => expect(arredondarParaBaixo(5.9)).toBe(5));
    test('5.1 → 5', () => expect(arredondarParaBaixo(5.1)).toBe(5));
    test('-5.1 → -6', () => expect(arredondarParaBaixo(-5.1)).toBe(-6));
    test('inteiro não muda', () => expect(arredondarParaBaixo(4)).toBe(4));
  });

  describe('arredondarParaCima', () => {
    test('5.1 → 6', () => expect(arredondarParaCima(5.1)).toBe(6));
    test('5.9 → 6', () => expect(arredondarParaCima(5.9)).toBe(6));
    test('-5.9 → -5', () => expect(arredondarParaCima(-5.9)).toBe(-5));
    test('inteiro não muda', () => expect(arredondarParaCima(4)).toBe(4));
  });

  describe('hipotenusa', () => {
    test('triângulo 3-4-5', () => expect(hipotenusa(3, 4)).toBe(5));
    test('triângulo 5-12-13', () => expect(hipotenusa(5, 12)).toBe(13));
    test('cateto zero', () => expect(hipotenusa(0, 5)).toBe(5));
    test('catetos iguais', () => expect(hipotenusa(1, 1)).toBeCloseTo(Math.SQRT2));
  });

  describe('grausParaRadianos', () => {
    test('180° = π', () => expect(grausParaRadianos(180)).toBeCloseTo(Math.PI));
    test('90° = π/2', () => expect(grausParaRadianos(90)).toBeCloseTo(Math.PI / 2));
    test('360° = 2π', () => expect(grausParaRadianos(360)).toBeCloseTo(2 * Math.PI));
    test('0° = 0', () => expect(grausParaRadianos(0)).toBe(0));
    test('60° = π/3', () => expect(grausParaRadianos(60)).toBeCloseTo(Math.PI / 3));
  });

  describe('radianosParaGraus', () => {
    test('π = 180°', () => expect(radianosParaGraus(Math.PI)).toBeCloseTo(180));
    test('π/2 = 90°', () => expect(radianosParaGraus(Math.PI / 2)).toBeCloseTo(90));
    test('0 = 0°', () => expect(radianosParaGraus(0)).toBe(0));
    test('2π = 360°', () => expect(radianosParaGraus(2 * Math.PI)).toBeCloseTo(360));
  });

});

// ============================================================

describe('Bloco 4 — Teoria dos Números e Sequências', () => {

  describe('mdc', () => {
    test('mdc(10, 5) = 5', () => expect(mdc(10, 5)).toBe(5));
    test('mdc(12, 8) = 4', () => expect(mdc(12, 8)).toBe(4));
    test('primos entre si', () => expect(mdc(17, 13)).toBe(1));
    test('mdc(0, 5) = 5', () => expect(mdc(0, 5)).toBe(5));
    test('mdc(36, 24) = 12', () => expect(mdc(36, 24)).toBe(12));
  });

  describe('mmc', () => {
    test('mmc(10, 5) = 10', () => expect(mmc(10, 5)).toBe(10));
    test('mmc(4, 6) = 12', () => expect(mmc(4, 6)).toBe(12));
    test('mmc de primos', () => expect(mmc(3, 7)).toBe(21));
    test('mmc(6, 9) = 18', () => expect(mmc(6, 9)).toBe(18));
  });

  describe('isPrimo', () => {
    test('7 é primo', () => expect(isPrimo(7)).toBe(true));
    test('2 é primo (menor primo)', () => expect(isPrimo(2)).toBe(true));
    test('11 é primo', () => expect(isPrimo(11)).toBe(true));
    test('13 é primo', () => expect(isPrimo(13)).toBe(true));
    test('1 não é primo', () => expect(isPrimo(1)).toBe(false));
    test('0 não é primo', () => expect(isPrimo(0)).toBe(false));
    test('negativo não é primo', () => expect(isPrimo(-3)).toBe(false));
    test('4 não é primo', () => expect(isPrimo(4)).toBe(false));
    test('9 não é primo', () => expect(isPrimo(9)).toBe(false));
    test('25 não é primo', () => expect(isPrimo(25)).toBe(false));
  });

  describe('fibonacci', () => {
    test('fibonacci(10) = 55', () => expect(fibonacci(10)).toBe(55));
    test('fibonacci(0) = 0', () => expect(fibonacci(0)).toBe(0));
    test('fibonacci(1) = 1', () => expect(fibonacci(1)).toBe(1));
    test('fibonacci(2) = 1', () => expect(fibonacci(2)).toBe(1));
    test('fibonacci(3) = 2', () => expect(fibonacci(3)).toBe(2));
    test('fibonacci(5) = 5', () => expect(fibonacci(5)).toBe(5));
    test('fibonacci(7) = 13', () => expect(fibonacci(7)).toBe(13));
  });

  describe('produtoArray', () => {
    test('múltiplos elementos', () => expect(produtoArray([2, 3, 4])).toBe(24));
    test('array vazio retorna 1', () => expect(produtoArray([])).toBe(1));
    test('um elemento', () => expect(produtoArray([5])).toBe(5));
    test('com negativo', () => expect(produtoArray([-2, 3])).toBe(-6));
    test('dois negativos', () => expect(produtoArray([-2, -3])).toBe(6));
    test('com zero', () => expect(produtoArray([2, 0, 4])).toBe(0));
  });

  describe('clamp', () => {
    test('valor dentro do intervalo', () => expect(clamp(5, 0, 10)).toBe(5));
    test('valor abaixo do mínimo retorna mínimo', () => expect(clamp(-5, 0, 10)).toBe(0));
    test('valor acima do máximo retorna máximo', () => expect(clamp(15, 0, 10)).toBe(10));
    test('valor igual ao mínimo', () => expect(clamp(0, 0, 10)).toBe(0));
    test('valor igual ao máximo', () => expect(clamp(10, 0, 10)).toBe(10));
    test('valor muito abaixo', () => expect(clamp(-100, -10, 10)).toBe(-10));
    test('valor muito acima', () => expect(clamp(100, -10, 10)).toBe(10));
  });

  describe('isDivisivel', () => {
    test('10 é divisível por 2', () => expect(isDivisivel(10, 2)).toBe(true));
    test('10 não é divisível por 3', () => expect(isDivisivel(10, 3)).toBe(false));
    test('0 é divisível por qualquer número', () => expect(isDivisivel(0, 5)).toBe(true));
    test('número divisível por si mesmo', () => expect(isDivisivel(7, 7)).toBe(true));
    test('9 não é divisível por 4', () => expect(isDivisivel(9, 4)).toBe(false));
  });

  describe('celsiusParaFahrenheit', () => {
    test('0°C = 32°F', () => expect(celsiusParaFahrenheit(0)).toBe(32));
    test('100°C = 212°F', () => expect(celsiusParaFahrenheit(100)).toBe(212));
    test('-40°C = -40°F', () => expect(celsiusParaFahrenheit(-40)).toBeCloseTo(-40));
    test('37°C = 98.6°F', () => expect(celsiusParaFahrenheit(37)).toBeCloseTo(98.6));
    test('20°C = 68°F', () => expect(celsiusParaFahrenheit(20)).toBeCloseTo(68));
  });

  describe('fahrenheitParaCelsius', () => {
    test('32°F = 0°C', () => expect(fahrenheitParaCelsius(32)).toBe(0));
    test('212°F = 100°C', () => expect(fahrenheitParaCelsius(212)).toBeCloseTo(100));
    test('-40°F = -40°C', () => expect(fahrenheitParaCelsius(-40)).toBeCloseTo(-40));
    test('98.6°F = 37°C', () => expect(fahrenheitParaCelsius(98.6)).toBeCloseTo(37));
    test('68°F = 20°C', () => expect(fahrenheitParaCelsius(68)).toBeCloseTo(20));
  });

  describe('inverso', () => {
    test('inverso de 4 é 0.25', () => expect(inverso(4)).toBe(0.25));
    test('inverso de 1 é 1', () => expect(inverso(1)).toBe(1));
    test('inverso de 2 é 0.5', () => expect(inverso(2)).toBe(0.5));
    test('inverso de -2 é -0.5', () => expect(inverso(-2)).toBe(-0.5));
    test('inverso de 10 é 0.1', () => expect(inverso(10)).toBeCloseTo(0.1));
    test('lança erro para zero', () => {
      expect(() => inverso(0)).toThrow();
    });
  });

});

// ============================================================

describe('Bloco 5 — Geometria e Comparação', () => {

  describe('areaCirculo', () => {
    test('raio 10', () => expect(areaCirculo(10)).toBeCloseTo(314.159));
    test('raio 1 é π', () => expect(areaCirculo(1)).toBeCloseTo(Math.PI));
    test('raio 0 é 0', () => expect(areaCirculo(0)).toBe(0));
    test('raio 5', () => expect(areaCirculo(5)).toBeCloseTo(Math.PI * 25));
    test('raio 2', () => expect(areaCirculo(2)).toBeCloseTo(Math.PI * 4));
  });

  describe('areaRetangulo', () => {
    test('5 × 4 = 20', () => expect(areaRetangulo(5, 4)).toBe(20));
    test('7 × 3 = 21', () => expect(areaRetangulo(7, 3)).toBe(21));
    test('lado zero', () => expect(areaRetangulo(0, 5)).toBe(0));
    test('quadrado 6×6 = 36', () => expect(areaRetangulo(6, 6)).toBe(36));
  });

  describe('perimetroRetangulo', () => {
    test('5 × 4 = 18', () => expect(perimetroRetangulo(5, 4)).toBe(18));
    test('3 × 7 = 20', () => expect(perimetroRetangulo(3, 7)).toBe(20));
    test('lado zero', () => expect(perimetroRetangulo(0, 5)).toBe(10));
    test('quadrado 4×4 = 16', () => expect(perimetroRetangulo(4, 4)).toBe(16));
  });

  describe('isMaiorQue', () => {
    test('10 > 5 é true', () => expect(isMaiorQue(10, 5)).toBe(true));
    test('5 > 10 é false', () => expect(isMaiorQue(5, 10)).toBe(false));
    test('5 > 5 é false (borda)', () => expect(isMaiorQue(5, 5)).toBe(false));
    test('-1 > -2 é true', () => expect(isMaiorQue(-1, -2)).toBe(true));
  });

  describe('isMenorQue', () => {
    test('5 < 10 é true', () => expect(isMenorQue(5, 10)).toBe(true));
    test('10 < 5 é false', () => expect(isMenorQue(10, 5)).toBe(false));
    test('5 < 5 é false (borda)', () => expect(isMenorQue(5, 5)).toBe(false));
    test('-2 < -1 é true', () => expect(isMenorQue(-2, -1)).toBe(true));
  });

  describe('isEqual', () => {
    test('iguais retorna true', () => expect(isEqual(7, 7)).toBe(true));
    test('a < b retorna false', () => expect(isEqual(7, 8)).toBe(false));
    test('a > b retorna false', () => expect(isEqual(8, 7)).toBe(false));
    test('zero igual a zero', () => expect(isEqual(0, 0)).toBe(true));
    test('negativos iguais', () => expect(isEqual(-3, -3)).toBe(true));
    test('negativo diferente de positivo', () => expect(isEqual(-3, 3)).toBe(false));
  });

  describe('medianaArray', () => {
    test('array ímpar ordenado', () => expect(medianaArray([1, 2, 3, 4, 5])).toBe(3));
    test('array par', () => expect(medianaArray([1, 2, 3, 4])).toBe(2.5));
    test('array não ordenado', () => expect(medianaArray([3, 1, 2])).toBe(2));
    test('um elemento', () => expect(medianaArray([7])).toBe(7));
    test('dois elementos', () => expect(medianaArray([4, 8])).toBe(6));
    test('lança erro para array vazio', () => {
      expect(() => medianaArray([])).toThrow();
    });
  });

  describe('dobro', () => {
    test('dobro de 10', () => expect(dobro(10)).toBe(20));
    test('dobro de zero', () => expect(dobro(0)).toBe(0));
    test('dobro de negativo', () => expect(dobro(-3)).toBe(-6));
    test('dobro de 7 é 14', () => expect(dobro(7)).toBe(14));
  });

  describe('triplo', () => {
    test('triplo de 10', () => expect(triplo(10)).toBe(30));
    test('triplo de zero', () => expect(triplo(0)).toBe(0));
    test('triplo de negativo', () => expect(triplo(-3)).toBe(-9));
    test('triplo de 4 é 12', () => expect(triplo(4)).toBe(12));
  });

  describe('metade', () => {
    test('metade de 20', () => expect(metade(20)).toBe(10));
    test('metade de zero', () => expect(metade(0)).toBe(0));
    test('metade de negativo', () => expect(metade(-6)).toBe(-3));
    test('metade de 5 é 2.5', () => expect(metade(5)).toBe(2.5));
  });

});
