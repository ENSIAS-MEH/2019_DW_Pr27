/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 *
 * @author adnane
 */
public class DaoFactory {
    private final String url;
    private final String username;
    private final String password;

    DaoFactory(String url, String username, String password) {
        this.url = url;
        this.username = username;
        this.password = password;
    }

    public static DaoFactory getInstance() {
        try {
            Class.forName("com.mysql.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }

        DaoFactory instance = new DaoFactory("jdbc:mysql://localhost:3306/javaee", "root", "Root123456");
        return instance;
    }

    public Connection getConnection() throws SQLException {
        return DriverManager.getConnection(url, username, password);
    }

    // Récupération du Dao
    public CreatureDao getCreatureDao() {
        return new CreatureDaoImpl(this);
    }
}
/*
CREATE TABLE creatures (
    name varchar(255),
    synonym varchar(255),
    embranchement varchar(255),
    classe varchar(255),
    subclasse varchar(255),
    famille varchar(255),
    genre varchar(255),
    description varchar(255),
    distribution varchar(255),
    groupeTrophique varchar(255),
    groupeEcologique varchar(255),
    categorie varchar(255)
);
*/