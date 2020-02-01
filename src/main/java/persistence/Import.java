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
            String name = data[0];
            String synonym = data[1];
            String embranchement = data[2];
            String classe = data[3];
            String subclasse = data[4];
            String famille = data[5];
            String genre = data[6];
            String description = data[7];
            String distribution = data[8];
            String groupeTrophique = data[9];
            String groupeEcologique = data[10];
            String categorie = data[11];
            temp = new Creature(name, synonym, embranchement, classe, subclasse, famille, genre, description, distribution, groupeTrophique, groupeEcologique, categorie);
            creatures.add(temp);
        }
        lineReader.close();
        
        return creatures;
    }
    
}


