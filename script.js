const formTarea = document.getElementById("formTarea");
const inputTitulo = document.getElementById("inputTitulo");
const selectTag = document.getElementById("selectTag");
const listaTareas = document.getElementById("listaTareas");

const inputBuscar = document.getElementById("inputBuscar");
const btnLimpiarBuscar = document.getElementById("btnLimpiarBuscar");

const statTotal = document.getElementById("statTotal");
const statVisibles = document.getElementById("statVisibles");
const statFavs = document.getElementById("statFavs");

const emptyState = document.getElementById("emptyState");

const filtros = document.querySelectorAll(".chip");

let filtroActivo = "all";