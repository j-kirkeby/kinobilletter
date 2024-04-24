package com.example.kinobilletter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import java.util.ArrayList;

@RestController
public class KinoController {
    @Autowired
    KinoRepository rep;

    @PostMapping("/lagre")
    public void lagreBillett(Billett innBillett){
        rep.lagreBillett(innBillett);
    }

    @GetMapping("/hentAlle")
    public List<Billett> hentAlle(){
        return rep.hentAlleBilletter();
    }

    @GetMapping("/slettAlle")
    public void slettAlle(){
        rep.slettAlleBilletter();
    }
}
