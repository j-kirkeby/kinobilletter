package com.example.kinobilletter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class KinoRepository {

    @Autowired
    private JdbcTemplate db;

    public void lagreBillett(Billett inn){
        String sql = "INSERT INTO Billett (film, antall, fornavn, etternavn, telefonnr, epost) VALUES (?,?,?,?,?,?)";
        db.update(sql, inn.getFilm(), inn.getAntall(), inn.getFornavn(),
                inn.getEtternavn(), inn.getTelefonnr(), inn.getEpost());
    }

    public List<Billett> hentAlleBilletter() {
        String sql = "SELECT * FROM Billett";
        List<Billett> alleBilletter = db.query(sql, new BeanPropertyRowMapper(Billett.class));
        return alleBilletter;
    }

    public void slettAlleBilletter() {
        String sql = "DELETE FROM Billett";
        db.update(sql);
    }
}
