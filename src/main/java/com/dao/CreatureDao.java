/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dao;

import com.beans.Creature;
import java.util.List;

/**
 *
 * @author adnane
 */
public interface CreatureDao {
    void ajouter(Creature creature);
    void delete();
    List<Creature> lister();
}
