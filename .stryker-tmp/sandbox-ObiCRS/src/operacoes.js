// @ts-nocheck
// src/operacoes.js

// === Bloco 1: Operações Básicas (1-10) ===
function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
function soma(a, b) {
  if (stryMutAct_9fa48("0")) {
    {}
  } else {
    stryCov_9fa48("0");
    return stryMutAct_9fa48("1") ? a - b : (stryCov_9fa48("1"), a + b);
  }
}
function subtracao(a, b) {
  if (stryMutAct_9fa48("2")) {
    {}
  } else {
    stryCov_9fa48("2");
    return stryMutAct_9fa48("3") ? a + b : (stryCov_9fa48("3"), a - b);
  }
}
function multiplicacao(a, b) {
  if (stryMutAct_9fa48("4")) {
    {}
  } else {
    stryCov_9fa48("4");
    return stryMutAct_9fa48("5") ? a / b : (stryCov_9fa48("5"), a * b);
  }
}
function divisao(a, b) {
  if (stryMutAct_9fa48("6")) {
    {}
  } else {
    stryCov_9fa48("6");
    if (stryMutAct_9fa48("9") ? b !== 0 : stryMutAct_9fa48("8") ? false : stryMutAct_9fa48("7") ? true : (stryCov_9fa48("7", "8", "9"), b === 0)) throw new Error(stryMutAct_9fa48("10") ? "" : (stryCov_9fa48("10"), 'Divisão por zero não é permitida.'));
    return stryMutAct_9fa48("11") ? a * b : (stryCov_9fa48("11"), a / b);
  }
}
function potencia(base, expoente) {
  if (stryMutAct_9fa48("12")) {
    {}
  } else {
    stryCov_9fa48("12");
    return Math.pow(base, expoente);
  }
}
function raizQuadrada(n) {
  if (stryMutAct_9fa48("13")) {
    {}
  } else {
    stryCov_9fa48("13");
    if (stryMutAct_9fa48("17") ? n >= 0 : stryMutAct_9fa48("16") ? n <= 0 : stryMutAct_9fa48("15") ? false : stryMutAct_9fa48("14") ? true : (stryCov_9fa48("14", "15", "16", "17"), n < 0)) throw new Error(stryMutAct_9fa48("18") ? "" : (stryCov_9fa48("18"), 'Não é possível calcular a raiz quadrada de um número negativo.'));
    return Math.sqrt(n);
  }
}
function restoDivisao(dividendo, divisor) {
  if (stryMutAct_9fa48("19")) {
    {}
  } else {
    stryCov_9fa48("19");
    return stryMutAct_9fa48("20") ? dividendo * divisor : (stryCov_9fa48("20"), dividendo % divisor);
  }
}
function fatorial(n) {
  if (stryMutAct_9fa48("21")) {
    {}
  } else {
    stryCov_9fa48("21");
    if (stryMutAct_9fa48("25") ? n >= 0 : stryMutAct_9fa48("24") ? n <= 0 : stryMutAct_9fa48("23") ? false : stryMutAct_9fa48("22") ? true : (stryCov_9fa48("22", "23", "24", "25"), n < 0)) throw new Error(stryMutAct_9fa48("26") ? "" : (stryCov_9fa48("26"), 'Fatorial não é definido para números negativos.'));
    if (stryMutAct_9fa48("29") ? n === 0 && n === 1 : stryMutAct_9fa48("28") ? false : stryMutAct_9fa48("27") ? true : (stryCov_9fa48("27", "28", "29"), (stryMutAct_9fa48("31") ? n !== 0 : stryMutAct_9fa48("30") ? false : (stryCov_9fa48("30", "31"), n === 0)) || (stryMutAct_9fa48("33") ? n !== 1 : stryMutAct_9fa48("32") ? false : (stryCov_9fa48("32", "33"), n === 1)))) return 1;
    let resultado = 1;
    for (let i = 2; stryMutAct_9fa48("36") ? i > n : stryMutAct_9fa48("35") ? i < n : stryMutAct_9fa48("34") ? false : (stryCov_9fa48("34", "35", "36"), i <= n); stryMutAct_9fa48("37") ? i-- : (stryCov_9fa48("37"), i++)) {
      if (stryMutAct_9fa48("38")) {
        {}
      } else {
        stryCov_9fa48("38");
        stryMutAct_9fa48("39") ? resultado /= i : (stryCov_9fa48("39"), resultado *= i);
      }
    }
    return resultado;
  }
}
function mediaArray(numeros) {
  if (stryMutAct_9fa48("40")) {
    {}
  } else {
    stryCov_9fa48("40");
    if (stryMutAct_9fa48("43") ? numeros.length !== 0 : stryMutAct_9fa48("42") ? false : stryMutAct_9fa48("41") ? true : (stryCov_9fa48("41", "42", "43"), numeros.length === 0)) return 0;
    return stryMutAct_9fa48("44") ? somaArray(numeros) * numeros.length : (stryCov_9fa48("44"), somaArray(numeros) / numeros.length);
  }
}
function somaArray(numeros) {
  if (stryMutAct_9fa48("45")) {
    {}
  } else {
    stryCov_9fa48("45");
    return numeros.reduce(stryMutAct_9fa48("46") ? () => undefined : (stryCov_9fa48("46"), (acc, val) => stryMutAct_9fa48("47") ? acc - val : (stryCov_9fa48("47"), acc + val)), 0);
  }
}

// === Bloco 2: Operações em Arrays e Checagens (11-20) ===
function maximoArray(numeros) {
  if (stryMutAct_9fa48("48")) {
    {}
  } else {
    stryCov_9fa48("48");
    if (stryMutAct_9fa48("51") ? numeros.length !== 0 : stryMutAct_9fa48("50") ? false : stryMutAct_9fa48("49") ? true : (stryCov_9fa48("49", "50", "51"), numeros.length === 0)) throw new Error(stryMutAct_9fa48("52") ? "" : (stryCov_9fa48("52"), 'Array vazio не possui valor máximo.'));
    return stryMutAct_9fa48("53") ? Math.min(...numeros) : (stryCov_9fa48("53"), Math.max(...numeros));
  }
}
function minimoArray(numeros) {
  if (stryMutAct_9fa48("54")) {
    {}
  } else {
    stryCov_9fa48("54");
    if (stryMutAct_9fa48("57") ? numeros.length !== 0 : stryMutAct_9fa48("56") ? false : stryMutAct_9fa48("55") ? true : (stryCov_9fa48("55", "56", "57"), numeros.length === 0)) throw new Error(stryMutAct_9fa48("58") ? "" : (stryCov_9fa48("58"), 'Array vazio не possui valor mínimo.'));
    return stryMutAct_9fa48("59") ? Math.max(...numeros) : (stryCov_9fa48("59"), Math.min(...numeros));
  }
}
function valorAbsoluto(n) {
  if (stryMutAct_9fa48("60")) {
    {}
  } else {
    stryCov_9fa48("60");
    return Math.abs(n);
  }
}
function arredondar(n) {
  if (stryMutAct_9fa48("61")) {
    {}
  } else {
    stryCov_9fa48("61");
    return Math.round(n);
  }
}
function isPar(n) {
  if (stryMutAct_9fa48("62")) {
    {}
  } else {
    stryCov_9fa48("62");
    return stryMutAct_9fa48("65") ? n % 2 !== 0 : stryMutAct_9fa48("64") ? false : stryMutAct_9fa48("63") ? true : (stryCov_9fa48("63", "64", "65"), (stryMutAct_9fa48("66") ? n * 2 : (stryCov_9fa48("66"), n % 2)) === 0);
  }
}
function isImpar(n) {
  if (stryMutAct_9fa48("67")) {
    {}
  } else {
    stryCov_9fa48("67");
    return stryMutAct_9fa48("70") ? n % 2 === 0 : stryMutAct_9fa48("69") ? false : stryMutAct_9fa48("68") ? true : (stryCov_9fa48("68", "69", "70"), (stryMutAct_9fa48("71") ? n * 2 : (stryCov_9fa48("71"), n % 2)) !== 0);
  }
}
function calcularPorcentagem(percentual, valor) {
  if (stryMutAct_9fa48("72")) {
    {}
  } else {
    stryCov_9fa48("72");
    return stryMutAct_9fa48("73") ? valor * percentual * 100 : (stryCov_9fa48("73"), (stryMutAct_9fa48("74") ? valor / percentual : (stryCov_9fa48("74"), valor * percentual)) / 100);
  }
}
function aumentarPorcentagem(valor, percentual) {
  if (stryMutAct_9fa48("75")) {
    {}
  } else {
    stryCov_9fa48("75");
    return stryMutAct_9fa48("76") ? valor / (1 + percentual / 100) : (stryCov_9fa48("76"), valor * (stryMutAct_9fa48("77") ? 1 - percentual / 100 : (stryCov_9fa48("77"), 1 + (stryMutAct_9fa48("78") ? percentual * 100 : (stryCov_9fa48("78"), percentual / 100)))));
  }
}
function diminuirPorcentagem(valor, percentual) {
  if (stryMutAct_9fa48("79")) {
    {}
  } else {
    stryCov_9fa48("79");
    return stryMutAct_9fa48("80") ? valor / (1 - percentual / 100) : (stryCov_9fa48("80"), valor * (stryMutAct_9fa48("81") ? 1 + percentual / 100 : (stryCov_9fa48("81"), 1 - (stryMutAct_9fa48("82") ? percentual * 100 : (stryCov_9fa48("82"), percentual / 100)))));
  }
}
function inverterSinal(n) {
  if (stryMutAct_9fa48("83")) {
    {}
  } else {
    stryCov_9fa48("83");
    return stryMutAct_9fa48("84") ? +n : (stryCov_9fa48("84"), -n);
  }
}

// === Bloco 3: Funções Trigonométricas e Logarítmicas (21-30) ===
function seno(anguloRad) {
  if (stryMutAct_9fa48("85")) {
    {}
  } else {
    stryCov_9fa48("85");
    return Math.sin(anguloRad);
  }
}
function cosseno(anguloRad) {
  if (stryMutAct_9fa48("86")) {
    {}
  } else {
    stryCov_9fa48("86");
    return Math.cos(anguloRad);
  }
}
function tangente(anguloRad) {
  if (stryMutAct_9fa48("87")) {
    {}
  } else {
    stryCov_9fa48("87");
    return Math.tan(anguloRad);
  }
}
function logaritmoNatural(n) {
  if (stryMutAct_9fa48("88")) {
    {}
  } else {
    stryCov_9fa48("88");
    return Math.log(n);
  }
}
function logaritmoBase10(n) {
  if (stryMutAct_9fa48("89")) {
    {}
  } else {
    stryCov_9fa48("89");
    return Math.log10(n);
  }
}
function arredondarParaBaixo(n) {
  if (stryMutAct_9fa48("90")) {
    {}
  } else {
    stryCov_9fa48("90");
    return Math.floor(n);
  }
}
function arredondarParaCima(n) {
  if (stryMutAct_9fa48("91")) {
    {}
  } else {
    stryCov_9fa48("91");
    return Math.ceil(n);
  }
}
function hipotenusa(catetoA, catetoB) {
  if (stryMutAct_9fa48("92")) {
    {}
  } else {
    stryCov_9fa48("92");
    return Math.sqrt(stryMutAct_9fa48("93") ? Math.pow(catetoA, 2) - Math.pow(catetoB, 2) : (stryCov_9fa48("93"), Math.pow(catetoA, 2) + Math.pow(catetoB, 2)));
  }
}
function grausParaRadianos(graus) {
  if (stryMutAct_9fa48("94")) {
    {}
  } else {
    stryCov_9fa48("94");
    return stryMutAct_9fa48("95") ? graus / (Math.PI / 180) : (stryCov_9fa48("95"), graus * (stryMutAct_9fa48("96") ? Math.PI * 180 : (stryCov_9fa48("96"), Math.PI / 180)));
  }
}
function radianosParaGraus(radianos) {
  if (stryMutAct_9fa48("97")) {
    {}
  } else {
    stryCov_9fa48("97");
    return stryMutAct_9fa48("98") ? radianos / (180 / Math.PI) : (stryCov_9fa48("98"), radianos * (stryMutAct_9fa48("99") ? 180 * Math.PI : (stryCov_9fa48("99"), 180 / Math.PI)));
  }
}

// === Bloco 4: Teoria dos Números e Sequências (31-40) ===
function mdc(a, b) {
  if (stryMutAct_9fa48("100")) {
    {}
  } else {
    stryCov_9fa48("100");
    // Máximo Divisor Comum
    while (stryMutAct_9fa48("101") ? false : (stryCov_9fa48("101"), b)) {
      if (stryMutAct_9fa48("102")) {
        {}
      } else {
        stryCov_9fa48("102");
        [a, b] = stryMutAct_9fa48("103") ? [] : (stryCov_9fa48("103"), [b, stryMutAct_9fa48("104") ? a * b : (stryCov_9fa48("104"), a % b)]);
      }
    }
    return a;
  }
}
function mmc(a, b) {
  if (stryMutAct_9fa48("105")) {
    {}
  } else {
    stryCov_9fa48("105");
    // Mínimo Múltiplo Comum
    return stryMutAct_9fa48("106") ? a * b * mdc(a, b) : (stryCov_9fa48("106"), (stryMutAct_9fa48("107") ? a / b : (stryCov_9fa48("107"), a * b)) / mdc(a, b));
  }
}
function isPrimo(n) {
  if (stryMutAct_9fa48("108")) {
    {}
  } else {
    stryCov_9fa48("108");
    if (stryMutAct_9fa48("112") ? n > 1 : stryMutAct_9fa48("111") ? n < 1 : stryMutAct_9fa48("110") ? false : stryMutAct_9fa48("109") ? true : (stryCov_9fa48("109", "110", "111", "112"), n <= 1)) return stryMutAct_9fa48("113") ? true : (stryCov_9fa48("113"), false);
    for (let i = 2; stryMutAct_9fa48("116") ? i >= n : stryMutAct_9fa48("115") ? i <= n : stryMutAct_9fa48("114") ? false : (stryCov_9fa48("114", "115", "116"), i < n); stryMutAct_9fa48("117") ? i-- : (stryCov_9fa48("117"), i++)) {
      if (stryMutAct_9fa48("118")) {
        {}
      } else {
        stryCov_9fa48("118");
        if (stryMutAct_9fa48("121") ? n % i !== 0 : stryMutAct_9fa48("120") ? false : stryMutAct_9fa48("119") ? true : (stryCov_9fa48("119", "120", "121"), (stryMutAct_9fa48("122") ? n * i : (stryCov_9fa48("122"), n % i)) === 0)) return stryMutAct_9fa48("123") ? true : (stryCov_9fa48("123"), false);
      }
    }
    return stryMutAct_9fa48("124") ? false : (stryCov_9fa48("124"), true);
  }
}
function fibonacci(n) {
  if (stryMutAct_9fa48("125")) {
    {}
  } else {
    stryCov_9fa48("125");
    // Retorna o n-ésimo termo
    if (stryMutAct_9fa48("129") ? n > 1 : stryMutAct_9fa48("128") ? n < 1 : stryMutAct_9fa48("127") ? false : stryMutAct_9fa48("126") ? true : (stryCov_9fa48("126", "127", "128", "129"), n <= 1)) return n;
    return stryMutAct_9fa48("130") ? fibonacci(n - 1) - fibonacci(n - 2) : (stryCov_9fa48("130"), fibonacci(stryMutAct_9fa48("131") ? n + 1 : (stryCov_9fa48("131"), n - 1)) + fibonacci(stryMutAct_9fa48("132") ? n + 2 : (stryCov_9fa48("132"), n - 2)));
  }
}
function produtoArray(numeros) {
  if (stryMutAct_9fa48("133")) {
    {}
  } else {
    stryCov_9fa48("133");
    if (stryMutAct_9fa48("136") ? numeros.length !== 0 : stryMutAct_9fa48("135") ? false : stryMutAct_9fa48("134") ? true : (stryCov_9fa48("134", "135", "136"), numeros.length === 0)) return 1;
    return numeros.reduce(stryMutAct_9fa48("137") ? () => undefined : (stryCov_9fa48("137"), (acc, val) => stryMutAct_9fa48("138") ? acc / val : (stryCov_9fa48("138"), acc * val)), 1);
  }
}
function clamp(valor, min, max) {
  if (stryMutAct_9fa48("139")) {
    {}
  } else {
    stryCov_9fa48("139");
    if (stryMutAct_9fa48("143") ? valor >= min : stryMutAct_9fa48("142") ? valor <= min : stryMutAct_9fa48("141") ? false : stryMutAct_9fa48("140") ? true : (stryCov_9fa48("140", "141", "142", "143"), valor < min)) return min;
    if (stryMutAct_9fa48("147") ? valor <= max : stryMutAct_9fa48("146") ? valor >= max : stryMutAct_9fa48("145") ? false : stryMutAct_9fa48("144") ? true : (stryCov_9fa48("144", "145", "146", "147"), valor > max)) return max;
    return valor;
  }
}
function isDivisivel(dividendo, divisor) {
  if (stryMutAct_9fa48("148")) {
    {}
  } else {
    stryCov_9fa48("148");
    return stryMutAct_9fa48("151") ? dividendo % divisor !== 0 : stryMutAct_9fa48("150") ? false : stryMutAct_9fa48("149") ? true : (stryCov_9fa48("149", "150", "151"), (stryMutAct_9fa48("152") ? dividendo * divisor : (stryCov_9fa48("152"), dividendo % divisor)) === 0);
  }
}
function celsiusParaFahrenheit(celsius) {
  if (stryMutAct_9fa48("153")) {
    {}
  } else {
    stryCov_9fa48("153");
    return stryMutAct_9fa48("154") ? celsius * 9 / 5 - 32 : (stryCov_9fa48("154"), (stryMutAct_9fa48("155") ? celsius * 9 * 5 : (stryCov_9fa48("155"), (stryMutAct_9fa48("156") ? celsius / 9 : (stryCov_9fa48("156"), celsius * 9)) / 5)) + 32);
  }
}
function fahrenheitParaCelsius(fahrenheit) {
  if (stryMutAct_9fa48("157")) {
    {}
  } else {
    stryCov_9fa48("157");
    return stryMutAct_9fa48("158") ? (fahrenheit - 32) * 5 * 9 : (stryCov_9fa48("158"), (stryMutAct_9fa48("159") ? (fahrenheit - 32) / 5 : (stryCov_9fa48("159"), (stryMutAct_9fa48("160") ? fahrenheit + 32 : (stryCov_9fa48("160"), fahrenheit - 32)) * 5)) / 9);
  }
}
function inverso(n) {
  if (stryMutAct_9fa48("161")) {
    {}
  } else {
    stryCov_9fa48("161");
    if (stryMutAct_9fa48("164") ? n !== 0 : stryMutAct_9fa48("163") ? false : stryMutAct_9fa48("162") ? true : (stryCov_9fa48("162", "163", "164"), n === 0)) throw new Error(stryMutAct_9fa48("165") ? "" : (stryCov_9fa48("165"), 'Não é possível inverter o número zero.'));
    return stryMutAct_9fa48("166") ? 1 * n : (stryCov_9fa48("166"), 1 / n);
  }
}

// === Bloco 5: Geometria e Lógica de Comparação (41-50) ===
function areaCirculo(raio) {
  if (stryMutAct_9fa48("167")) {
    {}
  } else {
    stryCov_9fa48("167");
    return stryMutAct_9fa48("168") ? Math.PI / Math.pow(raio, 2) : (stryCov_9fa48("168"), Math.PI * Math.pow(raio, 2));
  }
}
function areaRetangulo(base, altura) {
  if (stryMutAct_9fa48("169")) {
    {}
  } else {
    stryCov_9fa48("169");
    return stryMutAct_9fa48("170") ? base / altura : (stryCov_9fa48("170"), base * altura);
  }
}
function perimetroRetangulo(base, altura) {
  if (stryMutAct_9fa48("171")) {
    {}
  } else {
    stryCov_9fa48("171");
    return stryMutAct_9fa48("172") ? 2 / (base + altura) : (stryCov_9fa48("172"), 2 * (stryMutAct_9fa48("173") ? base - altura : (stryCov_9fa48("173"), base + altura)));
  }
}
function isMaiorQue(a, b) {
  if (stryMutAct_9fa48("174")) {
    {}
  } else {
    stryCov_9fa48("174");
    return stryMutAct_9fa48("178") ? a <= b : stryMutAct_9fa48("177") ? a >= b : stryMutAct_9fa48("176") ? false : stryMutAct_9fa48("175") ? true : (stryCov_9fa48("175", "176", "177", "178"), a > b);
  }
}
function isMenorQue(a, b) {
  if (stryMutAct_9fa48("179")) {
    {}
  } else {
    stryCov_9fa48("179");
    return stryMutAct_9fa48("183") ? a >= b : stryMutAct_9fa48("182") ? a <= b : stryMutAct_9fa48("181") ? false : stryMutAct_9fa48("180") ? true : (stryCov_9fa48("180", "181", "182", "183"), a < b);
  }
}
function isEqual(a, b) {
  if (stryMutAct_9fa48("184")) {
    {}
  } else {
    stryCov_9fa48("184");
    return stryMutAct_9fa48("187") ? a !== b : stryMutAct_9fa48("186") ? false : stryMutAct_9fa48("185") ? true : (stryCov_9fa48("185", "186", "187"), a === b);
  }
}
function medianaArray(numeros) {
  if (stryMutAct_9fa48("188")) {
    {}
  } else {
    stryCov_9fa48("188");
    if (stryMutAct_9fa48("191") ? numeros.length !== 0 : stryMutAct_9fa48("190") ? false : stryMutAct_9fa48("189") ? true : (stryCov_9fa48("189", "190", "191"), numeros.length === 0)) throw new Error(stryMutAct_9fa48("192") ? "" : (stryCov_9fa48("192"), 'Array vazio не possui mediana.'));
    const sorted = stryMutAct_9fa48("193") ? [...numeros] : (stryCov_9fa48("193"), (stryMutAct_9fa48("194") ? [] : (stryCov_9fa48("194"), [...numeros])).sort(stryMutAct_9fa48("195") ? () => undefined : (stryCov_9fa48("195"), (a, b) => stryMutAct_9fa48("196") ? a + b : (stryCov_9fa48("196"), a - b))));
    const mid = Math.floor(stryMutAct_9fa48("197") ? sorted.length * 2 : (stryCov_9fa48("197"), sorted.length / 2));
    if (stryMutAct_9fa48("200") ? sorted.length % 2 !== 0 : stryMutAct_9fa48("199") ? false : stryMutAct_9fa48("198") ? true : (stryCov_9fa48("198", "199", "200"), (stryMutAct_9fa48("201") ? sorted.length * 2 : (stryCov_9fa48("201"), sorted.length % 2)) === 0)) {
      if (stryMutAct_9fa48("202")) {
        {}
      } else {
        stryCov_9fa48("202");
        return stryMutAct_9fa48("203") ? (sorted[mid - 1] + sorted[mid]) * 2 : (stryCov_9fa48("203"), (stryMutAct_9fa48("204") ? sorted[mid - 1] - sorted[mid] : (stryCov_9fa48("204"), sorted[stryMutAct_9fa48("205") ? mid + 1 : (stryCov_9fa48("205"), mid - 1)] + sorted[mid])) / 2);
      }
    }
    return sorted[mid];
  }
}
function dobro(n) {
  if (stryMutAct_9fa48("206")) {
    {}
  } else {
    stryCov_9fa48("206");
    return stryMutAct_9fa48("207") ? n / 2 : (stryCov_9fa48("207"), n * 2);
  }
}
function triplo(n) {
  if (stryMutAct_9fa48("208")) {
    {}
  } else {
    stryCov_9fa48("208");
    return stryMutAct_9fa48("209") ? n / 3 : (stryCov_9fa48("209"), n * 3);
  }
}
function metade(n) {
  if (stryMutAct_9fa48("210")) {
    {}
  } else {
    stryCov_9fa48("210");
    return stryMutAct_9fa48("211") ? n * 2 : (stryCov_9fa48("211"), n / 2);
  }
}

// Exportando todas as 50 funções
module.exports = stryMutAct_9fa48("212") ? {} : (stryCov_9fa48("212"), {
  soma,
  subtracao,
  multiplicacao,
  divisao,
  potencia,
  raizQuadrada,
  restoDivisao,
  fatorial,
  mediaArray,
  somaArray,
  maximoArray,
  minimoArray,
  valorAbsoluto,
  arredondar,
  isPar,
  isImpar,
  calcularPorcentagem,
  aumentarPorcentagem,
  diminuirPorcentagem,
  inverterSinal,
  seno,
  cosseno,
  tangente,
  logaritmoNatural,
  logaritmoBase10,
  arredondarParaBaixo,
  arredondarParaCima,
  hipotenusa,
  grausParaRadianos,
  radianosParaGraus,
  mdc,
  mmc,
  isPrimo,
  fibonacci,
  produtoArray,
  clamp,
  isDivisivel,
  celsiusParaFahrenheit,
  fahrenheitParaCelsius,
  inverso,
  areaCirculo,
  areaRetangulo,
  perimetroRetangulo,
  isMaiorQue,
  isMenorQue,
  isEqual,
  medianaArray,
  dobro,
  triplo,
  metade
});