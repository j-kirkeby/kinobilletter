package com.example.kinobilletter;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class KinoController {
    public final ArrayList<Billett> alleBilletter = new ArrayList<>();

    @PostMapping("/lagre")
    public void lagreBillett(Billett innBillett){
        alleBilletter.add(innBillett);
    }

    @GetMapping("/hentAlle")
    public ArrayList<Billett> hentAlle(){
        return alleBilletter;
    }

    @GetMapping("/slettAlle")
    public void slettAlle(){
        alleBilletter.clear();
    }
}
