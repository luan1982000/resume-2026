"use client";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import "./list-project.css";

export const ModalDetail: React.FC<{
  isOpen?: boolean;
  projectSelected?: any;
  onClose: () => void;
}> = ({ isOpen, projectSelected, onClose }) => {
  return (
    <Modal
      className="modal-detail-project"
      footer={false}
      open={isOpen}
      onCancel={onClose}
      width="90vw"
      style={{ maxWidth: 800, top: 20 }}
    >
      <div className="modal-header">
        <div className="project-time">{projectSelected?.time}</div>
        <h1 className="project-title">{projectSelected?.name}</h1>
        <div className="project-role-badge">{projectSelected?.role}</div>
      </div>

      <div className="modal-content">
        <div className="info-section">
          <div className="section-title">Business Overview</div>
          <div className="section-content business-content">
            {projectSelected?.business}
          </div>
        </div>

        <div className="info-section">
          <div className="section-title">Key Responsibilities</div>
          <div className="section-content responsibility-content">
            {projectSelected?.responsibility}
          </div>
        </div>

        <div className="info-section">
          <div className="section-title">Technologies Used</div>
          <div className="section-content technologies-content">
            {projectSelected?.technologies}
          </div>
        </div>

        <div className="info-grid">
          <div className="info-item">
            <div className="info-label">Team Size</div>
            <div className="info-value">{projectSelected?.size}</div>
          </div>
          {projectSelected?.link && (
            <div className="info-item">
              <div className="info-label">Live Project</div>
              <div className="info-value">
                <a
                  href={projectSelected?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="visit-link"
                >
                  <Button type="primary" size="small">
                    Visit Now
                  </Button>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};
