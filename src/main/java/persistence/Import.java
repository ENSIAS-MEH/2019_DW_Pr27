/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package persistence;

import com.beans.Creature;
import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;

/**
 *
 * @author adnane
 */
public class Import {
    
    private String source = System.getProperty("user.dir").replace("\\", "/") + "/src/main/java/com/data/creatures.csv";
    
    public ArrayList<Creature> generate() throws FileNotFoundException, IOException {
        
        ArrayList<Creature> creatures = new ArrayList<Creature>();
        Creature temp;
        //reading
        BufferedReader lineReader = new BufferedReader(new FileReader(source));     
        String lineText = null;
        lineReader.readLine(); // skip header line      
        while ((lineText = lineReader.readLine()) != null) {

            String[] data = lineText.split(",");
            String id = data[0];
            String name = data[1];
            String synonym = data[2];
            String embranchement = data[3];
            String classe = data[4];
            String subclasse = data[5];
            String famille = data[6];
            String genre = data[7];
            String description = data[8];
            String distribution = data[9];
            String groupeTrophique = data[10];
            String groupeEcologique = data[11];
            String categorie = data[12];
            temp = new Creature(id, name, synonym, embranchement, classe, subclasse, famille, genre, description, distribution, groupeTrophique, groupeEcologique, categorie);
            creatures.add(temp);
        }
        lineReader.close();
        
        return creatures;
    }
    
}


