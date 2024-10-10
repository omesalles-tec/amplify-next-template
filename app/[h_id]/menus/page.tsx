"use client";
import React from 'react';
import { Header, Container, ContentLayout } from '@cloudscape-design/components';

const IngredientsPage: React.FC = () => {
  return (
    <ContentLayout
      header={
        <Header
          variant="h1"
          description="Manage your ingredients here"
        >
          Welcome to menus
        </Header>
      }
    >
      <Container>
        <p>This is where you can view, add, edit, and delete ingredients for your recipes.</p>
        <p>Start by adding your first ingredient or browse your existing collection.</p>
      </Container>
    </ContentLayout>
  );
};

export default IngredientsPage;
