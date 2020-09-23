<template>
  <div>
    <!-- How to benefit? -->
    <div style="text-transform: uppercase; text-align: center;">
      <div style="margin-bottom: 5px;">Comment bénéficier de l'offre</div>
      <strong>
        <div>150€ de réduction* dès 1000€ d'achat</div>
        <img width="90" height="4" src="@/assets/dash.png" alt="dash">
      </strong>
    </div>
    <!-- Already member? -->
    <div style="margin-top: 35px; margin-bottom: 35px; padding: 20px; background-color: #ed3323; color: white; text-align: center;">
      <strong>Déjà membre ?</strong>
      <div style="font-size: 13px; margin-top: 10px;">
        Votre code promo vous attend directement sur le site <a href="" style="color: white;">en cliquant ici</a>
      </div>
    </div>

    <!-- Steps -->
    <v-container bg fill-height grid-list-md text-xs-center>
      <v-layout row wrap style="text-transform: uppercase;">
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
    <div style="text-align: center; margin-top: 40px; margin-bottom: 40px;">
      <v-btn class="ma-2" depressed  tile color="#ed3323" width="220" height="28" style="color: white;">
        Je m'inscris
      </v-btn>
    </div>
  </div>
</template>
