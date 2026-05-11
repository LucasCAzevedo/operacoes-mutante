"""
Geração de gráficos PNG — Análise de Teste de Mutação
Dados coletados com StrykerJS v9.6.1 e Jest v29.7.0
"""

import os
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
import numpy as np

# ── Configuração global ───────────────────────────────────────────────────────

OUT_DIR = os.path.join(os.path.dirname(__file__), '..', 'reports', 'graficos')
os.makedirs(OUT_DIR, exist_ok=True)

AZUL       = '#2980b9'
AZUL_CL    = '#5dade2'
VERDE      = '#27ae60'
VERDE_CL   = '#a9dfbf'
VERMELHO   = '#c0392b'
VERMELHO_CL= '#f1948a'
LARANJA    = '#e67e22'
CINZA      = '#95a5a6'
FUNDO      = '#f8f9fa'

plt.rcParams.update({
    'figure.facecolor': FUNDO,
    'axes.facecolor':   FUNDO,
    'font.family':      'DejaVu Sans',
    'axes.spines.top':  False,
    'axes.spines.right':False,
})

def salvar(nome):
    caminho = os.path.join(OUT_DIR, nome)
    plt.savefig(caminho, dpi=150, bbox_inches='tight', facecolor=FUNDO)
    plt.close()
    print(f'  ✔  {caminho}')

# ── Dados ─────────────────────────────────────────────────────────────────────

cobertura = {
    'metricas': ['Statements', 'Branch', 'Functions', 'Lines'],
    'inicial':  [85.41, 58.82, 100.0, 98.64],
    'final':    [100.0, 100.0, 100.0, 100.0],
}

mutacao = {
    'inicial': {'score': 73.71, 'killed': 154, 'timeout': 3,  'survived': 44, 'no_cov': 12},
    'final':   {'score': 96.71, 'killed': 200, 'timeout': 6,  'survived': 7,  'no_cov': 0 },
    'total': 213,
}

# ═════════════════════════════════════════════════════════════════════════════
# GRÁFICO 1 — Mutation Score: Inicial vs Final
# ═════════════════════════════════════════════════════════════════════════════
print('\nGerando gráficos...')

fig, ax = plt.subplots(figsize=(7, 5))
fig.patch.set_facecolor(FUNDO)

rotulos   = ['Suíte Inicial\n(50 testes)', 'Suíte Final\n(236 testes)']
valores   = [73.71, 96.71]
cores     = [VERMELHO, VERDE]
x         = np.arange(len(rotulos))
largura   = 0.45

barras = ax.bar(x, valores, width=largura, color=cores, edgecolor='white',
                linewidth=1.5, zorder=3)

# Linha de meta 98 %
ax.axhline(98, color='#e74c3c', linestyle='--', linewidth=1.4, zorder=2)
ax.text(1.28, 98.5, 'Meta: 98%', color='#e74c3c', fontsize=9, va='bottom')

# Rótulos nas barras
for barra, val in zip(barras, valores):
    ax.text(barra.get_x() + barra.get_width() / 2,
            barra.get_height() + 1.2,
            f'{val:.2f}%', ha='center', va='bottom',
            fontsize=13, fontweight='bold', color='#1a1a2e')

ax.set_ylim(0, 110)
ax.set_xticks(x)
ax.set_xticklabels(rotulos, fontsize=11)
ax.set_ylabel('Pontuação de Mutação (%)', fontsize=11)
ax.set_title('Pontuação de Mutação — Inicial vs Final', fontsize=13,
             fontweight='bold', pad=14)
ax.yaxis.set_major_formatter(plt.FuncFormatter(lambda v, _: f'{v:.0f}%'))
ax.set_yticks(range(0, 111, 10))
ax.grid(axis='y', alpha=0.35, zorder=0)

# Anotação de melhoria
ax.annotate('', xy=(1, 96.71), xytext=(0, 73.71),
            arrowprops=dict(arrowstyle='->', color='#7f8c8d', lw=1.5))
ax.text(0.5, 83, '+23,00 pp', ha='center', fontsize=9, color='#7f8c8d',
        style='italic')

salvar('01_mutation_score.png')

# ═════════════════════════════════════════════════════════════════════════════
# GRÁFICO 2 — Cobertura de Código: Inicial vs Final (barras agrupadas)
# ═════════════════════════════════════════════════════════════════════════════

fig, ax = plt.subplots(figsize=(9, 5))
fig.patch.set_facecolor(FUNDO)

metricas = cobertura['metricas']
ini      = cobertura['inicial']
fin      = cobertura['final']
x        = np.arange(len(metricas))
larg     = 0.35

b1 = ax.bar(x - larg/2, ini, larg, label='Inicial (50 testes)',
            color=VERMELHO_CL, edgecolor=VERMELHO, linewidth=1.4,
            zorder=3, capsize=4)
b2 = ax.bar(x + larg/2, fin, larg, label='Final (236 testes)',
            color=VERDE_CL,   edgecolor=VERDE,    linewidth=1.4,
            zorder=3)

for barra, val in zip(b1, ini):
    ax.text(barra.get_x() + barra.get_width() / 2,
            barra.get_height() + 0.8,
            f'{val:.1f}%', ha='center', va='bottom',
            fontsize=9, color=VERMELHO, fontweight='bold')

for barra, val in zip(b2, fin):
    ax.text(barra.get_x() + barra.get_width() / 2,
            barra.get_height() + 0.8,
            f'{val:.0f}%', ha='center', va='bottom',
            fontsize=9, color=VERDE, fontweight='bold')

ax.set_ylim(0, 115)
ax.set_xticks(x)
ax.set_xticklabels(metricas, fontsize=11)
ax.set_ylabel('Cobertura (%)', fontsize=11)
ax.set_title('Cobertura de Código — Inicial vs Final', fontsize=13,
             fontweight='bold', pad=14)
ax.yaxis.set_major_formatter(plt.FuncFormatter(lambda v, _: f'{v:.0f}%'))
ax.set_yticks(range(0, 111, 10))
ax.grid(axis='y', alpha=0.35, zorder=0)
ax.legend(fontsize=10, framealpha=0.8)

salvar('02_cobertura.png')

# ═════════════════════════════════════════════════════════════════════════════
# GRÁFICO 3 — Distribuição de Mutantes: Suíte Inicial (donut)
# ═════════════════════════════════════════════════════════════════════════════

def donut(titulo, dados_dict, cores_dict, nome_arquivo, score):
    labels = list(dados_dict.keys())
    vals   = list(dados_dict.values())
    cores  = list(cores_dict.values())
    total  = sum(vals)

    fig, ax = plt.subplots(figsize=(7, 6))
    fig.patch.set_facecolor(FUNDO)

    wedges, texts, autotexts = ax.pie(
        vals,
        labels=None,
        colors=cores,
        autopct=lambda p: f'{p:.1f}%' if p > 1 else '',
        pctdistance=0.78,
        startangle=90,
        wedgeprops=dict(width=0.55, edgecolor='white', linewidth=2.5),
    )
    for at in autotexts:
        at.set_fontsize(10)
        at.set_fontweight('bold')
        at.set_color('white')

    # Texto central
    ax.text(0, 0.08, f'{score:.2f}%', ha='center', va='center',
            fontsize=22, fontweight='bold', color='#1a1a2e')
    ax.text(0, -0.22, 'Mutation Score', ha='center', va='center',
            fontsize=10, color='#555')

    # Legenda manual
    legendas = [mpatches.Patch(color=c, label=f'{l}  ({v})')
                for l, v, c in zip(labels, vals, cores)]
    ax.legend(handles=legendas, loc='lower center',
              bbox_to_anchor=(0.5, -0.13),
              ncol=2, fontsize=10, framealpha=0.9)

    ax.set_title(titulo, fontsize=13, fontweight='bold', pad=18)
    salvar(nome_arquivo)


donut(
    'Distribuição de Mutantes — Suíte Inicial (50 testes)',
    {'Mortos': 154, 'Timeout': 3, 'Sobreviventes': 44, 'Sem cobertura': 12},
    {'Mortos': VERDE, 'Timeout': AZUL_CL, 'Sobreviventes': VERMELHO, 'Sem cobertura': CINZA},
    '03_mutantes_inicial.png',
    score=73.71,
)

# ═════════════════════════════════════════════════════════════════════════════
# GRÁFICO 4 — Distribuição de Mutantes: Suíte Final (donut)
# ═════════════════════════════════════════════════════════════════════════════

donut(
    'Distribuição de Mutantes — Suíte Final (236 testes)',
    {'Mortos': 200, 'Timeout': 6, 'Equivalentes': 7},
    {'Mortos': VERDE, 'Timeout': AZUL_CL, 'Equivalentes': LARANJA},
    '04_mutantes_final.png',
    score=96.71,
)

# ═════════════════════════════════════════════════════════════════════════════
# GRÁFICO 5 — Painel comparativo: testes × mutantes mortos × score
# ═════════════════════════════════════════════════════════════════════════════

fig, axes = plt.subplots(1, 3, figsize=(13, 5))
fig.patch.set_facecolor(FUNDO)
fig.suptitle('Resumo Comparativo — Antes e Depois', fontsize=14,
             fontweight='bold', y=1.01)

categorias = ['Inicial', 'Final']
x = np.arange(2)

# Painel A: número de testes
ax = axes[0]
vals = [50, 236]
bars = ax.bar(x, vals, color=[VERMELHO_CL, VERDE_CL],
              edgecolor=[VERMELHO, VERDE], linewidth=1.5, width=0.5, zorder=3)
for b, v in zip(bars, vals):
    ax.text(b.get_x() + b.get_width()/2, v + 4, str(v),
            ha='center', fontsize=13, fontweight='bold')
ax.set_xticks(x); ax.set_xticklabels(categorias, fontsize=11)
ax.set_title('Quantidade de Testes', fontsize=11, fontweight='bold')
ax.set_ylim(0, 280)
ax.grid(axis='y', alpha=0.35, zorder=0)

# Painel B: mutantes mortos
ax = axes[1]
vals = [157, 206]   # killed + timeout
bars = ax.bar(x, vals, color=[VERMELHO_CL, VERDE_CL],
              edgecolor=[VERMELHO, VERDE], linewidth=1.5, width=0.5, zorder=3)
for b, v in zip(bars, vals):
    ax.text(b.get_x() + b.get_width()/2, v + 2, str(v),
            ha='center', fontsize=13, fontweight='bold')
ax.set_xticks(x); ax.set_xticklabels(categorias, fontsize=11)
ax.set_title('Mutantes Mortos + Timeout\n(de 213 total)', fontsize=11, fontweight='bold')
ax.set_ylim(0, 240)
ax.axhline(213, color='#7f8c8d', linestyle=':', linewidth=1.2)
ax.text(1.4, 214, '213 total', fontsize=8, color='#7f8c8d')
ax.grid(axis='y', alpha=0.35, zorder=0)

# Painel C: mutation score
ax = axes[2]
vals = [73.71, 96.71]
bars = ax.bar(x, vals, color=[VERMELHO_CL, VERDE_CL],
              edgecolor=[VERMELHO, VERDE], linewidth=1.5, width=0.5, zorder=3)
for b, v in zip(bars, vals):
    ax.text(b.get_x() + b.get_width()/2, v + 0.8, f'{v:.2f}%',
            ha='center', fontsize=12, fontweight='bold')
ax.axhline(98, color='#e74c3c', linestyle='--', linewidth=1.3, zorder=2)
ax.text(1.32, 98.4, 'Meta\n98%', fontsize=8, color='#e74c3c')
ax.set_xticks(x); ax.set_xticklabels(categorias, fontsize=11)
ax.set_title('Mutation Score', fontsize=11, fontweight='bold')
ax.set_ylim(0, 112)
ax.yaxis.set_major_formatter(plt.FuncFormatter(lambda v, _: f'{v:.0f}%'))
ax.grid(axis='y', alpha=0.35, zorder=0)

plt.tight_layout()
salvar('05_painel_comparativo.png')

# ─────────────────────────────────────────────────────────────────────────────
print(f'\nTodos os gráficos salvos em: {os.path.abspath(OUT_DIR)}\n')
