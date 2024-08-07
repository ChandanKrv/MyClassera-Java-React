package com.chandankrv.myclassera.repository;

import com.chandankrv.myclassera.model.Student;
import com.chandankrv.myclassera.model.Subject;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Set;

/**
 * Created by Chandan on 05 August, 2024.
 * --------------------------------------
 * Q. Problem Statement :
 */
@Repository
public interface SubjectRepository extends JpaRepository<Subject, Integer> {
    @Query("SELECT s.students FROM Subject s WHERE s.id = :id")
    Set<Student> findStudentsBySubjectId(@Param("id") int id);

}