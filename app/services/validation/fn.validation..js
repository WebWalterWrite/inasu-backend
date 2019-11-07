/*
 ####################################################################
 Fonctions de test de chaque value provenant d'un champ de formulaire
#####################################################################
 */

 import r from './regex';

/**
 * @description - Vérifier si la valeur est vide
 * @param {String} val - 
 * @returns {Boolean}
 */
export const isEmpty = val => val.length;


/**
* @description - Vérifier si la valeur à un nombre minimum de caractères
* @param {String} val - valeur passée
* @param {String} min - Nb min de caractères requis - par défaut 2 
* @returns {Boolean}
*/
export const isMinChar = (val, min) => val.length >= min;


/**
* @description - Vérifier si la valeur à un nombre minimum de caractères
* @param {String} val - valeur passée
* @param {String} max - Nb max de caractères requis - par défaut 2 
* @returns {Boolean}
*/
export const isMaxChar = (val, max = 25) => val.length <= max;


/**
* @description - Vérifier si la valeur possède uniquement des lettres
* @param {String} val - valeur passée
* @returns {Boolean}
*/
export const isOnlyLetters = val => {

  const regexLetters = RegExp(r.string);

  return regexLetters.test(val);
};


/**
* @description - Vérifier si la valeur est au format email.
* @param {String} val - valeur passée
* @returns {Boolean}
*/
export const isEmail = val => {

  const regexLetters = RegExp(r.email);
  
  return regexLetters.test(val);
};