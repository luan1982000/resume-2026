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
    >
      <div className="font-thin text-left">{projectSelected?.time}</div>
      <h1 className="font-bold mb-3 text-2xl text-center">
        {projectSelected?.name}
      </h1>
      <p className="line-info">
        <b className="mr-1">Role:</b> {projectSelected?.role}
      </p>
      <p className="line-info">
        <b className="mr-1">Business:</b> {projectSelected?.business}
      </p>
      <p className="line-info">
        <b className="mr-1">Responsibility:</b>{" "}
        {projectSelected?.responsibility}
      </p>
      <p className="line-info">
        <b className="mr-1">Technologies:</b> {projectSelected?.technologies}
      </p>
      <p className="line-info">
        <b className="mr-1">Team size:</b> {projectSelected?.size}
      </p>
      {projectSelected?.link ? (
        <p className="line-info">
          <b className="mr-1">Published:</b>{" "}
          <a
            href={projectSelected?.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Visit Now</button>
          </a>
        </p>
      ) : null}
    </Modal>
  );
};
