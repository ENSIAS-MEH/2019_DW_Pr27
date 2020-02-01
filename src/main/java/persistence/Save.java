/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package persistence;

import com.dao.*;
import com.beans.Creature;
import java.io.IOException;
import java.util.ArrayList;

/**
 *
 * @author adnane
 */
public class Save {
    
    private CreatureDao creatureDao;

    public void init() {
        DaoFactory daoFactory = DaoFactory.getInstance();
        this.creatureDao = daoFactory.getCreatureDao();
    }
    
    public void supprimer() {
        this.creatureDao.delete();
    }
    
    public void sauvegarder() throws IOException {
        ArrayList<Creature> creatures;
        Import imp = new Import();
        creatures = imp.generate();
        for(Creature temp: creatures) {
            this.creatureDao.ajouter(temp);
        }
    }
    
    public static void main(String[] args) throws IOException {
        Save s =  new Save();
        s.init();
        s.supprimer();
        s.sauvegarder();
    }
}
