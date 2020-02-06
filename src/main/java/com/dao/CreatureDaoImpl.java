/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dao;

import com.beans.Creature;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author adnane
 */
public class CreatureDaoImpl implements CreatureDao {
    private DaoFactory daoFactory;

    CreatureDaoImpl(DaoFactory daoFactory) {
        this.daoFactory = daoFactory;
    }

    @Override
    public void ajouter(Creature creature) {
        Connection connexion = null;
        PreparedStatement preparedStatement = null;

        try {
            connexion = daoFactory.getConnection();
            preparedStatement = connexion.prepareStatement("INSERT INTO creatures(id, name, synonym, embranchement, classe, subclasse, famille, genre, description, distribution, groupeTrophique, groupeEcologique, categorie) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);");
            preparedStatement.setString(1, creature.getId());
            preparedStatement.setString(2, creature.getName());
            preparedStatement.setString(3, creature.getSynonym());
            preparedStatement.setString(4, creature.getEmbranchement());
            preparedStatement.setString(5, creature.getClasse());
            preparedStatement.setString(6, creature.getSubclasse());
            preparedStatement.setString(7, creature.getFamille());
            preparedStatement.setString(8, creature.getGenre());
            preparedStatement.setString(9, creature.getDescription());
            preparedStatement.setString(10, creature.getDistribution());
            preparedStatement.setString(11, creature.getGroupetrophique());
            preparedStatement.setString(12, creature.getGroupeecologique());
            preparedStatement.setString(13, creature.getCategorie());
            
            preparedStatement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }

    }
    
    public void delete() {
        Connection connexion = null;
        Statement stm = null;
        try {
            connexion = daoFactory.getConnection();
            stm = connexion.createStatement();
            stm.executeUpdate("DELETE FROM creatures;");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public List<Creature> lister() {
        List<Creature> creatures = new ArrayList<Creature>();
        Connection connexion = null;
        Statement statement = null;
        ResultSet resultat = null;

        try {
            connexion = daoFactory.getConnection();
            statement = connexion.createStatement();
            resultat = statement.executeQuery("SELECT id, name, synonym, embranchement, classe, subclasse, famille, genre, description, distribution, groupeTrophique, groupeEcologique, categorie FROM creatures;");

            while (resultat.next()) {
                String id = resultat.getString("id");
                String name = resultat.getString("name");
                String synonym = resultat.getString("synonym");
                String embranchement = resultat.getString("embranchement");
                String classe = resultat.getString("classe");
                String subclasse = resultat.getString("subclasse");
                String famille = resultat.getString("famille");
                String genre = resultat.getString("genre");
                String description = resultat.getString("description");
                String distribution = resultat.getString("distribution");
                String groupeTrophique = resultat.getString("groupeTrophique");
                String groupeEcologique = resultat.getString("groupeEcologique");
                String categorie = resultat.getString("categorie");

                Creature creature = new Creature(id, name, synonym, embranchement, classe, subclasse, famille, genre, description, distribution, groupeTrophique, groupeEcologique, categorie);
                creatures.add(creature);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return creatures;
    }
}
