/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.builder;

import com.retriever.Extractor;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import javax.ws.rs.GET;
import javax.ws.rs.Path;

/**
 *
 * @author adnane
 */
//check page http://localhost:8080/creatures
@Path("/")
public class CreaturesRessource {
    
    private Extractor extractor;
    private final String filePath = System.getProperty("user.home").replace("\\", "/") + "/Documents/NetBeansProjects/creatures/src/main/java/com/data/creatures.json";

    public void doExtract() {
        this.extractor = new Extractor();
        this.extractor.extractToJsonArray();
    }
    
    public String readAllBytes(String filePath) {
        String content = "";
        try{
            content = new String(Files.readAllBytes(Paths.get(filePath)));
        } catch (IOException e) {
            e.printStackTrace();
        }
        return content;
    }
    
    @GET
    public String creatures() {
        //extracting
        doExtract();
        //building
        String result = readAllBytes(this.filePath);
        return result;
    }
}