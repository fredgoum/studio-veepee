<template>
  <div>
    <!-- How to benefit? -->
    <div style="text-transform: uppercase; text-align: center;">
      <div style="font-family: SevenOneEight-Light; margin-bottom: 2px;">
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
    <div style="margin-top: 20px; margin-bottom: 15px; padding: 13px; background-color: #ed3323; color: white; text-align: center;">
      <strong>Déjà membre ?</strong>
      <div style="font-size: 13px; margin-top: 10px;">
        Votre code promo vous attend directement sur le site <a href="" style="color: white;">en cliquant ici</a>
      </div>
    </div>

    <!-- Steps -->
    <v-container grid-list-md>
      <v-layout row wrap style="text-transform: uppercase; font-family: SevenOneEight-Light; font-size: 15px">
        <!-- Step 1 -->
        <v-flex style="display: flex;">
          <strong style="color: #ed3323; font-size: 40px; margin-right: 10px;">1</strong>
          <div>
            <div>Rejoignez</div>
            <strong style="color: #ed3323;">EMIRATES | THE LIST</strong>
          </div>
        </v-flex>
        <!-- Step 2 -->
        <v-flex style="display: flex;">
          <strong style="color: #ed3323; font-size: 40px; margin-right: 10px;">2</strong>
          <div>
            <div>Recevez par email</div>
            <strong style="color: #ed3323;">VOTRE BON DE 150€ OFFERT</strong>
            <div>à utiliser dès 1000€ d'achat</div>
          </div>
        </v-flex>
        <!-- Step 3 -->
        <v-flex style="display: flex;">
          <strong style="color: #ed3323; font-size: 40px; margin-right: 10px;">3</strong>
          <div>
            <div>Réservez votre séjour</div>
            <strong style="color: #ed3323;">Avant le 30 avril 2019</strong>
          </div>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- Btn inscription -->
    <div style="text-align: center; margin-top: 15px; margin-bottom: 36px;">
      <v-btn depressed tile color="#ed3323" width="220" height="28" style="color: white;">
        Je m'inscris
      </v-btn>
    </div>
  </div>
</template>
