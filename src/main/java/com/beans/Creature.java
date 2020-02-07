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
    private String x1;
    private String y1;
    private String x2;
    private String y2;
    
    //name,synonym,embranchement,classe,subclasse,famille,genre,description,distribution,groupetrophique,groupeecologique,categorie

    public Creature(String id, String name, String synonym, String embranchement, String classe, String subclasse, String famille, String genre, String description, String distribution, String groupeTrophique, String groupeEcologique, String categorie, String x1, String y1, String x2, String y2) {
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
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }

    public String getX1() {
        return x1;
    }

    public void setX1(String x1) {
        this.x1 = x1;
    }

    public String getY1() {
        return y1;
    }

    public void setY1(String y1) {
        this.y1 = y1;
    }

    public String getX2() {
        return x2;
    }

    public void setX2(String x2) {
        this.x2 = x2;
    }

    public String getY2() {
        return y2;
    }

    public void setY2(String y2) {
        this.y2 = y2;
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
