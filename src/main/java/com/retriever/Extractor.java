/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.retriever;

import java.io.FileInputStream;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import java.io.FileOutputStream;
import java.io.OutputStream;
/**
 *
 * @author adnane
 */
public class Extractor {
    
    private String source = System.getProperty("user.dir").replace("\\", "/") + "/src/main/java/com/data/creatures.csv";
    private String destination = System.getProperty("user.dir").replace("\\", "/") + "/src/main/java/com/data/creatures.json";
    
    public void extractToJsonArray() {
        try (InputStream in = new FileInputStream(source)) {
            CSV csv = new CSV(true, ',', in );
            List < String > fieldNames = null;
            if (csv.hasNext()) fieldNames = new ArrayList < > (csv.next());
            List < Map < String, String >> list = new ArrayList < > ();
            while (csv.hasNext()) {
                List < String > x = csv.next();
                Map < String, String > obj = new LinkedHashMap < > ();
                for (int i = 0; i < fieldNames.size(); i++) {
                    obj.put(fieldNames.get(i), x.get(i));
                }
                list.add(obj);
            }
            ObjectMapper mapper = new ObjectMapper();
            mapper.enable(SerializationFeature.INDENT_OUTPUT);
            try(OutputStream out = new FileOutputStream(destination)) {
                mapper.writeValue(out, list);
            }
        } catch(Exception e) {
            e.printStackTrace();
        }
    }
    
    public static void main(String[] args) {
        Extractor e = new Extractor();
        e.extractToJsonArray();
    }
}