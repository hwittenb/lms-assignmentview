package org.lms.assignmentview.infrastructure.jpa.repository;

import org.lms.assignmentview.infrastructure.jpa.entity.DiscussionPostEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface JpaDiscussionPostRepository extends JpaRepository<DiscussionPostEntity, UUID> {

    List<DiscussionPostEntity> findAllByClassId(String classId);

}
