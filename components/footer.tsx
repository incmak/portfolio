export default function Footer() {
  return (
    <footer className='bg-muted py-6 border-t mb-14'>
      <div className='container mx-auto px-6 text-center'>
        <p>
          &copy; {new Date().getFullYear()} Mueen Ahmed. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
