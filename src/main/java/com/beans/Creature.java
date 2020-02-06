/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.beans;

/**
 *
 * @author adnane
 */
public class Creature {
    
    private String id;
    private String name;
    private String synonym;
    private String embranchement;
    private String classe;
    private String subclasse;
    private String famille;
    private String genre;
    private String description;
    private String distribution;
    private String groupetrophique;
    private String groupeecologique;
    private String categorie;
    
    //name,synonym,embranchement,classe,subclasse,famille,genre,description,distribution,groupetrophique,groupeecologique,categorie

    public Creature(String id, String name, String synonym, String embranchement, String classe, String subclasse, String famille, String genre, String description, String distribution, String groupeTrophique, String groupeEcologique, String categorie) {
        this.id = id;
        this.name = name;
        this.synonym = synonym;
        this.embranchement = embranchement;
        this.classe = classe;
        this.subclasse = subclasse;
        this.famille = famille;
        this.genre = genre;
        this.description = description;
        this.distribution = distribution;
        this.groupetrophique = groupeTrophique;
        this.groupeecologique = groupeEcologique;
        this.categorie = categorie;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSynonym() {
        return synonym;
    }

    public void setSynonym(String synonym) {
        this.synonym = synonym;
    }

    public String getEmbranchement() {
        return embranchement;
    }

    public void setEmbranchement(String embranchement) {
        this.embranchement = embranchement;
    }

    public String getClasse() {
        return classe;
    }

    public void setClasse(String classe) {
        this.classe = classe;
    }

    public String getSubclasse() {
        return subclasse;
    }

    public void setSubclasse(String subclasse) {
        this.subclasse = subclasse;
    }

    public String getFamille() {
        return famille;
    }

    public void setFamille(String famille) {
        this.famille = famille;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDistribution() {
        return distribution;
    }

    public void setDistribution(String distribution) {
        this.distribution = distribution;
    }

    public String getGroupetrophique() {
        return groupetrophique;
    }

    public void setGroupetrophique(String groupeTrophique) {
        this.groupetrophique = groupeTrophique;
    }

    public String getGroupeecologique() {
        return groupeecologique;
    }

    public void setGroupeecologique(String groupeEcologique) {
        this.groupeecologique = groupeEcologique;
    }

    public String getCategorie() {
        return categorie;
    }

    public void setCategorie(String categorie) {
        this.categorie = categorie;
    }
      
}
