<template>
  <div id="bloc-inscription">
    <!-- How to benefit? -->
    <div id="benefit-container">
      <div style="benefit">
        Comment bénéficier de l'offre
      </div>
      <strong>
        <div style="margin-bottom: -6px;">
          150€ de réduction* dès 1000€ d'achat
        </div>
        <img width="100" height="3" src="@/assets/dash.png" alt="dash">
      </strong>
    </div>
    <!-- Already member? -->
    <div id="member">
      <strong>Déjà membre ?</strong>
      <div id="member-subtitle">
        Votre code promo vous attend directement sur le site <u><a href="" style="color: white;">en cliquant ici</a></u>
      </div>
    </div>

    <!-- Steps -->
    <v-container grid-list-md>
      <v-layout id="steps" row wrap>
        <!-- Step 1 -->
        <v-flex class="display-flex">
          <strong class="step-number">1</strong>
          <div>
            <div>Rejoignez</div>
            <strong class="step-info">EMIRATES | THE LIST</strong>
          </div>
        </v-flex>
        <!-- Step 2 -->
        <v-flex class="display-flex">
          <strong class="step-number">2</strong>
          <div>
            <div>Recevez par email</div>
            <strong class="step-info">VOTRE BON DE 150€ OFFERT</strong>
            <div>à utiliser dès 1000€ d'achat</div>
          </div>
        </v-flex>
        <!-- Step 3 -->
        <v-flex class="display-flex">
          <strong class="step-number">3</strong>
          <div>
            <div>Réservez votre séjour</div>
            <strong class="step-info">Avant le 30 avril 2019</strong>
          </div>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- Btn inscription -->
    <div id="btn-inscription">
      <v-btn depressed tile color="#ed3323" width="220" height="28" style="color: white;">
        Je m'inscris
      </v-btn>
    </div>
  </div>
</template>
